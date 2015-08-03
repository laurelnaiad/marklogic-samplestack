var _ = require('lodash');
var lazypipe = require('lazypipe');
var through = require('through2');
var duplex = require('event-stream').duplex;
var merge = require('merge-stream');
// var rebaser = require('../../rebaser');
var path = require('path');
var stepThrough = require('../stepThrough');
var rimraf = require('rimraf');

var globs = require('../../globs');

var tiers = {
  // marklogic: require('./marklogic'),
  browser: require('./browser'),
  node: require('./node')
};

var myBase = globs.projectDir;

var configureExtention = function (file) {
  var ext = path.extname(file.path);
  switch (ext) {
    case '.js':
      file.fileType = '.js';
      file.isJs = true;
      switch (path.basename(file.path, '.js')) {
        case 'browserify':
          file.isBrowserify = true;
          break;
        default:
      }
      break;
    case '.scss':
      file.fileType = '.scss';
      file.isScss = true;
      break;
    case '.html':
      file.fileType = '.html';
      file.isHtml = true;
      break;
    default:

  }

};


var configureGroups = function (file) {
  var remainder = file.path.substr(file.base.length);

  if (remainder.indexOf('/browser/') === 0) {
    file.tier = 'browser';
    // console.log(file.path);
    // file.path = file.base + '/static/' +
    //     file.path.substr((file.base.length + '/browser/'.length));
  }
  else if (remainder.indexOf('/shared/') === 0) {
    file.tier = 'node';
    // file.path = file.base + '/' +
    //     file.path.substr((file.base.length + '/shared/js/'.length));
  }
  else if (remainder.indexOf('/appserver/node-express/') === 0) {
    file.tier = 'node';
    // file.path = file.base + '/' +
    //     file.path.substr(
    //       (file.base.length + '/appserver/node-express/'.length)
    //     );
  }
  else {
    throw new Error('Unexpected file in build stream. "' + file.path + '"');
  }
};

var configure = function (file) {
  // var tier = handleTier(file);
  // var fileType = handleFileType(file);

  var writeTo;
  // set file.base/cwd to repo root (i.e. clean up the stream)
  file.base = myBase;
  file.cwd = file.base;

  configureExtention(file);
  configureGroups(file);

  return file.tier;
};

var coverageDeploy = function (context, options) {
  var myOptions = _.clone(options);
  myOptions.port = 3001;
  myOptions.istanbul = true;
  myOptions.ldapPort = 33391;
  // whether to use https or not
  return require('./coverage')(context, myOptions);
};

module.exports = function (context, options) {

  var myTiers = {};
  myTiers.browser = tiers.browser(context, options);
  myTiers.node = tiers.node(context, options);
  // myTiers.marklogic = tiers.marklogic(context, options);
  // myTiers.other = through.obj(function (file, enc, cb) {
  //   console.log(file.path);
  //   this.push(file); cb();
  // });

  var plumber = $.plumber();

  var sorter =  plumber.pipe(through.obj(function (file, enc, cb) {
    // console.log(file.path);
    // console.log(file.base);
    var tierName = configure(file);
    myTiers[tierName].write(file);
    cb();
  }, function (cb) {
    _.each(Object.keys(tiers), function (tierKey) {
      // console.log(tierKey);
      myTiers[tierKey].end();
    });
    cb();
  }));

  var merged =  merge(
    myTiers.browser,
    myTiers.node
    // myTiers.other
  )
  .on('error', function (err) {
    console.log(err);
  })
  .on('end', function (err) {
    // console.log('end merge of tiers');
  });

  merged = merged.pipe(coverageDeploy(context, options));


  // var rebased = merged.pipe(through.obj(function (file, enc, cb) {
  //   switch (file.tier) {
  //     case 'browser':
  //       file.path = file.base + '/static/' +
  //           file.path.substr((file.base.length + '/browser/'.length));
  //       break;
  //     case 'node':
  //       file.path = file.base + '/' +
  //           file.path.substr(
  //             (file.base.length + '/appserver/node-express/'.length)
  //           );
  //       break;
  //     case 'marklogic':
  //       break;
  //     case 'other':
  //       console.log('OTHER: ' + file.path);
  //       break;
  //     default:
  //       console.log('default: ' + file.path);
  //       break;
  //   }
  //   this.push(file);
  //   cb();
  var final = merged;
  // if (options.finalStreamLog) {
  //   final = merged.pipe($.debug({title: '  redeployed' }));
  // }
  // else {
  //   final
  // }

  // final = final.pipe($.debug({ title: 'what came out'}));

  return stepThrough.tracked(
    { name: 'app server build', indentation: 1},
    duplex(
      plumber,
      final
    )
  );
};
