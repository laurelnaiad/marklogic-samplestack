var path = require('path');
var steps = require('../steps');
var lazypipe = require('lazypipe');
var through = require('through2');
var merge = require('merge-stream');
var gulp = require('gulp');
var stepThrough = require('../stepThrough');
var duplex = require('event-stream').duplex;

var sort = function (contexxt, options) {
  return through.obj(function (file, enc, cb) {
    if (file.path.match('^' + file.base + '/appserver/node-express/')) {
      file.path = file.path.replace('/appserver/node-express/', '/');
      if (file.path.match('^' + file.base + '/test/')) {
        file.isTestFile = true;
      }
      else {
        file.isSrcFile = true;
      }
    }
    else {
      console.log(file.path);
    }
    // if
    // var renamed = function () {
    //   return through.obj(function (file, enc, cb) {
    //     file.path = file.path.replace(
    //       '/browser/bower_components/',
    //       '/static/deps/'
    //     );
    //     this.push(file);
    //     cb();
    //   });
    // };

    this.push(file);
    cb();
  });
};

var processByFileType  = function (context, options) {
  var jslint = steps.jslint('node', context, options);

  var passthrough = through.obj(function (file, enc, cb) {
    this.push(file);
    cb();
  });

  var inStream = through.obj(function (file, enc, cb) {
    // signal that node files were seen in the build cycle
    context.nodeBuilt = true;
    // sort into the processors or the passhtrough
    if (file.isJs) {
      jslint.write(file);
    }
    else {
      passthrough.write(file);
    }
    cb();
  }, function (cb) {
    jslint.end();
    passthrough.end();
  });

  var merged = merge(
    jslint,
    passthrough
  );

  var rebased = merged.pipe(through.obj(function (file, enc, cb) {
    // console.log(file.base);
    var remainder = file.path.substr(file.base.length);
    // console.log(file.base);
    // console.log(remainder);

    if (remainder.indexOf('/appserver/node-express/') === 0) {
      file.isTest = true;
      file.path = file.base + '/' +
          file.path.substr(
            (file.base.length + '/appserver/node-express/'.length)
          );
    }
    this.push(file);
    cb();
  }));



  return duplex(inStream, rebased);
};


var cloneForTemplates = function (context, options, templates, nonTemplates) {

  return through.obj(function (file, enc, cb) {
    if ($.match(file, [
      '**/application.js',
      '**/index.html',
      '**/deps.js',
      '**/options.js'
    ])) {
      // console.log('browser says apply template to this: ' + file.path);
      templates.write(file.clone());
    }
    else {
      nonTemplates.write(file);
    }
    this.push(file);
    cb();
  }, function (cb) {
    // console.log('clone for templates flush');
    templates.end();
    nonTemplates.end();
    cb();
  });
};
// var splitForTemplates = function (context, options, nonTemplates, templates) {
//
//   return lazypipe()
//     .pipe(function () {
//       return through.obj(function (file, enc, cb) {
//         if ($.match(file, [
//           '**/application.js',
//           '**/index.html',
//           '**/deps.js',
//           '**/options.js'
//         ])) {
//           templates.write(file);
//         }
//         else {
//           nonTemplates.write(file);
//         }
//         cb();
//       }, function (cb) {
//         templates.end();
//         nonTemplates.end();
//         cb();
//       });
//     })
//     .pipe(function () { return stepThrough.dummy(); })();
// };

// var alignDirectories = function (context, options) {
//   // return rebaser('static');
//   return lazypipe()
//     .pipe(function () {
//       return through.obj(function (file, enc, cb) {
//         file.isAppServerFile = true;
//         // // console.log(file.path);
//         // if (file.path.indexOf(file.base + '/test/unit-tests/') === 0) {
//         //   file.path = file.path
//         //       .replace(file.base + '/test/unit-tests', file.base);
//         // }
//         // if (file.path.indexOf(file.base + '/src/') === 0) {
//         //   file.path = file.path
//         //       .replace(file.base + '/src', file.base);
//         // }
//         this.push(file);
//         cb();
//       });
//     })();
//     // .pipe(rebaser, 'builds/app')();
// };

// var postprocess = function (context, options, nonTemplates, templates) {
//
//
//   var embedlr = steps.embedlr(
//     context,
//     { port: options.liveReloadPort }
//     // TODO FIX ME { port: context.envs.app.ports.liveReload }
//   );
//
//   var doClone = cloner();
//   // file the clones pipe
//   var runTemplates = stepThrough.dummy();
//   templates = templates.pipe(runTemplates);
//   runTemplates = runTemplates
//     // .pipe(stepThrough.dummy());
//     // .pipe($.if('**/index\.html', embedlr))
//     // .pipe($.filelog())
//     .pipe(steps.applyTemplateParams(context, { options: options }));
//     // .pipe(steps.bowerFiles(true));
//
//   return merge(nonTemplates, runTemplates);
//
// };

var postprocess = function (context, options) {
  return steps.applyTemplateParams('node', context, { options: options });
};

var deploy  = function () {
  return lazypipe()
    // .pipe($.debug, { title: 'deployed'} )
    .pipe(gulp.dest, 'shared/js/builds/app')
    // .pipe($.debug, { title: 'deployed' })
  // .pipe(gulp.dest('shared/js/builds/app'))
  // throw away file object refs after writing, we have refs to them
  // in the toKeep stream;
  // deployed will be an empty stream but its timing of completion is what
  // we care about
    .pipe(function () {
      return through.obj(function (file, enc, cb) { cb(); } );
    })();

};

var postprocessAndDeploy = function (context, options) {
  var templates = stepThrough.dummy();
  var nonTemplates = stepThrough.dummy();

  var toKeep = cloneForTemplates(context, options, templates, nonTemplates);
  var postProcessed = templates
    .pipe(postprocess(context, options));

  var forDeployment = merge(
    postProcessed,
    nonTemplates
  );

  var deployed = forDeployment.pipe(deploy(context, options));

  var merged = merge(deployed, toKeep)
  .on('end', function () {
    // console.log('allDone end node');
  });

  return duplex(toKeep, merged);

    // var nonTemplates = stepThrough.dummy();
    // var templates = stepThrough.dummy();

  // var head = splitForTemplates(context, options, nonTemplates, templates);
  // var toKeep = merge(nonTemplates, templates);
  // var toDeploy = postprocess(context, options, nonTemplates, templates);
  // var deployed = toDeploy
  //   .pipe(deploy());
  //
  // var allDone = function () {
  //   return merge(deployed, toKeep);
  // };
  //
  // return lazypipe()
  //   .pipe(function () { return head; })
  //   .pipe(allDone)();
  //   // .pipe($.debug)
};


// var run = function (context, options) {
//   return stepThrough({
//     onEach: function (stream, file, cb) {
//       // console.log('seen');
//       context.nodeSeen = true;
//       stream.push(file);
//       cb();
//     },
//     onFinish: function () {
//       if (context.nodeSeen) {
//         console.log('(re)start server');
//         setTimeout(function () {
//           ctx.startServer(
//             path.resolve(__dirname, '../../../builds/app/static'),
//             3000,
//             true
//           );
//         }, 1000);
//       }
//     }
//   });
// };

module.exports = function (context, options) {


  var head = processByFileType(context, options);
  var tail = head
    .pipe(postprocessAndDeploy(context, options));
  return duplex(head, tail);
};
//
//
//
//
//
//
//
//
// var util = require('util');
// var Tier = require('../tier');
// var steps = require('../../steps');
// var lazypipe = require('lazypipe');
// var Promise = require('bluebird');
// var through = require('through2');
// var merge = require('merge-stream');
// var $ = require('../../helper').$;
// var _ = require('lodash');
// var cloner = require('../../cloner');
// var gulp = require('gulp');
// var rebaser= require('../../rebaser');
//
//
// module.exports = {
//   buildDeployRun: function (context, options) {
//     var jslint = steps.jslint(context, options);
//
//     // var jslint = steps.jslint(context, options);
//     // var embedLr = steps.embedLr(context, options);
//     // var browserify = steps.browserify(context, options);
//     var passthrough = through.obj(function (file, enc, cb) {
//       this.push(file);
//       cb();
//     });
//
//     var js = through.obj(function (file, enc, cb) {
//       jslint.write(file);
//       cb();
//     }, function (cb) {
//       jslint.end();
//     });
//
//     var inStream = function () {
//       return through.obj(function (file, enc, cb) {
//         file.isTestFile = file.path.indexOf(file.base + '/test') === 0;
//         // sort into the processors or the passhtrough
//         if (file.isJs) {
//           js.write(file);
//         }
//         else {
//           passthrough.write(file);
//         }
//         cb();
//       }, function (cb) {
//         js.end();
//         passthrough.end();
//       });
//     };
//
//     var processed = function () {
//       return merge(
//         jslint,
//         passthrough
//       );
//     };
//
//     var skipTemplateProcessor = through.obj(function (file, enc, cb) {
//       this.push(file); cb();
//     });
//
//     var doClone = cloner();
//     var forTemplateProcessor = through.obj(function (file, enc, cb) {
//       this.push(file); cb();
//     });
//     forTemplateProcessor = forTemplateProcessor.pipe(doClone);
//     var templateProcessed = doClone.cloned
//       .pipe(steps.applyTemplateParams(context, { options: options }));
//
//     var toKeep = merge(forTemplateProcessor, skipTemplateProcessor);
//     var toDeploy = merge(templateProcessed, skipTemplateProcessor);
//     toDeploy = toDeploy.pipe(through.obj(function (file, enc, cb) {
//       if (file.path.indexOf(file.base + '/test') !== 0) {
//         // file.path = file.path.replace(file.base + '/src', file.base);
//         this.push(file);
//       }
//       cb();
//     }));
//     toDeploy = toDeploy
//       // .pipe(rebaser('static'))
//       .pipe(gulp.dest('shared/js/builds/app'))
//       .pipe(through.obj(
//         // trhow away after writing; TODO (do the actual writing)
//         function (file, enc, cb) { cb(); }
//       ));
//
//     var templateDeploy = function () {
//       return through.obj(function (file, enc, cb) {
//         // if ($.match(file, [
//         //   '**/application.js',
//         //   '**/index.html',
//         //   '**/deps.js'
//         // ])) {
//         if (false) {
//           forTemplateProcessor.write(file);
//         }
//         else {
//           skipTemplateProcessor.write(file);
//         }
//         cb();
//       }, function (cb) {
//         forTemplateProcessor.end();
//         skipTemplateProcessor.end();
//         cb();
//       });
//     };
//
//     var doMerge = function () {
//       return merge(toDeploy, toKeep);
//     };
//
//     return lazypipe()
//       .pipe(inStream)
//       .pipe(processed)
//       .pipe(templateDeploy)
//       .pipe(doMerge)
//       ();
//
//   }
// };
