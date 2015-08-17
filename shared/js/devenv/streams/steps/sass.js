
module.exports = function () {
  var lazypipe = require('lazypipe');
  var stepThrough = require('../stepThrough');
  var gulp = require('gulp');
  var globs = require('../../globs');
  var through = require('through2');
  var path = require('path');
  var merge = require('event-stream').merge;
  var duplex = require('event-stream').duplex;
  var Promise = require('bluebird');

  var once = false;
  var mySassStream;
  var sassDone;
  var sassPromise = new Promise(function(resolve, reject) {
    sassDone = function () {
      // console.log('sass done');
      resolve();
    };
  });

  var importDirs = [
    'browser/bower_components/bootstrap-sass/assets/stylesheets'
  ];

  // TODO: considering using bourbon instead of bootstrap
  // var importDirs = [
  //   'bower_components/bourbon/dist',
  //   'bower_components/bitters/app/assets/stylesheets',
  //   'bower_components/neat/app/assets/stylesheets'
  // ];

  var sassPipe;
  var sassParams;

  sassParams = {
    includePaths: importDirs,
    // onError: ctx.errorHandler,
    sourceMap: true
  };

  var sassStream = function () {

    var src = gulp.src(globs.sassFiles);
    var pipe = src
      // .pipe($.plumber())
      .pipe($.sourcemaps.init())
      .pipe($.sass(sassParams).on('error', function (err) {
        console.log(err.toString());
      }))
      .pipe(
        $.sourcemaps.write(
          '.',
          { includeContent: true, sourceRoot: '/' }
        )
      )
      .pipe(through.obj(function (file, enc, cb) {
        // console.log('a spin. file: ' + file.path);
        file.tier = 'browser';
        file.base = globs.projectDir;
        // file.path = file.path.replace(
        //   '/browser/bower_components', '/browser/deps'
        // );
        // file.base = file.base.replace(
        //   '/browser/bower_components', '/browser/deps'
        // );
        this.push(file);
        cb();
      }));

    return duplex(src, pipe);
  };

    // return stepThrough.tracked(
    //   'SASS',
    //   lazypipe()
    //     .pipe($.plumber)
    //     .pipe(gulp.src, globs.sassFiles)
    //     .pipe($.sourcemaps.init)
    //     .pipe($.sass, sassParams)
    //     .pipe(
    //       $.sourcemaps.write,
    //       '.',
    //       { includeContent: true, sourceRoot: '/' }
    //     )()
    //     // .on('error', function (err) {
    //     //   console.log(err.toString());
    //     // })
    // )
    // .pipe(through.obj(function (file, enc, cb) {
    //   file.tier = 'browser';
    //   file.base = globs.projectDir;
    //   // file.path = file.path.replace(
    //   //   '/browser/bower_components', '/browser/deps'
    //   // );
    //   // file.base = file.base.replace(
    //   //   '/browser/bower_components', '/browser/deps'
    //   // );
    //   this.push(file);
    //   cb();
    // }));
  // };

  var sassSkip = stepThrough.dummy();
  var sassOut = stepThrough.dummy();

  var kickoff = stepThrough({
    onEach: function (s, file, cb) {
      // console.log('bower in');
      var fName = path.extname(file.path);
      // console.log(fName);
      if (fName === '.scss') {
        if (!once) {
          // console.log('SASS!!!!!!!!!!!');
          // console.log('bower kick');
          once = true;
          mySassStream = sassStream();
          mySassStream.pipe(sassOut);
          mySassStream.on('end', sassDone);
        }
        // s.push(file);
      }
      cb();
      // else {
      //   // console.log('bower skip');
      //   sassSkip.write(file);
      //   s.push(file);
      //   cb();
      // }
    },
    onFlush: function (s, cb) {
      // console.log('BOWERRRRRRRRRRRRR');
      if (mySassStream) {
        sassPromise.then(function () {
          sassSkip.end();
          if (mySassStream) {
            mySassStream.end();
          }
          cb();
        });
      }
      else {
        sassSkip.end();
        sassOut.end();
        cb();
      }
    }
  });

  var passthrough = function () {
    return stepThrough.dummy();
  };

  var merged = merge(sassSkip, sassOut);

  var final = merged; //.pipe(through.obj(file, enc, )$.filelog());

  return stepThrough.tracked(
    { name: 'sass', indentation: 3 },
    duplex(kickoff, final)
  );
};
