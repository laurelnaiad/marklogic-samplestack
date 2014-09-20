"use strict";

var gulp = require('gulp');
var log = require('gulp-util').log;
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var bower = require('bower');
var Dgeni = require('dgeni');
var merge = require('event-stream').merge;
var path = require('canonical-path');


// We indicate to gulp that tasks are async by returning the stream.
// Gulp can then wait for the stream to close before starting dependent tasks.
// See clean and bower for async tasks, and see assets and doc-gen for dependent tasks below

var bowerFolder = 'bower_components';
var outputFolder = '../../builds/docs';


var copyComponent = function(component, pattern, sourceFolder, packageFile) {
  pattern = pattern || '/**/*';
  sourceFolder = sourceFolder || bowerFolder;
  packageFile = packageFile || 'bower.json';
  var version = require(path.resolve(sourceFolder,component,packageFile)).version;
  return gulp
    .src(sourceFolder + '/' + component + pattern)
    .pipe(gulp.dest(outputFolder + '/components/' + component + '-' + version));
};

gulp.task('bower', function() {
  var bowerTask = bower.commands.install();
  bowerTask.on('log', function (result) {
    log('bower:', result.id, result.data.endpoint.name);
  });
  bowerTask.on('error', function(error) {
    log(error);
  });
  return bowerTask;
});

gulp.task('build-app', function() {
  gulp.src('app/src/**/*.js')
    .pipe(concat('docs.js'))
    .pipe(gulp.dest(outputFolder + '/js/'));
});

gulp.task('assets', ['bower'], function () {
  return merge(
    gulp.src(['app/assets/**/*']).pipe(gulp.dest(outputFolder)),
    copyComponent('bootstrap', '/dist/**/*'),
    copyComponent('open-sans-fontface'),
    copyComponent('lunr.js','/*.js'),
    copyComponent('google-code-prettify'),
    copyComponent('jquery', '/dist/*.js'),
    // copyComponent('marked', '/**/*.js', '../node_modules', 'package.json')
    // SCS
    copyComponent('marked', '/**/*.js', '../../node_modules', 'package.json')
  );
});

var runWeb = function () {
  var connect = require('connect');
  var serveStatic = require('serve-static');

  var server = connect()
    .use(
      require('connect-modrewrite')(
      // if lacking a dot, redirect to index.html
        ['!\\. /index.html [L]']
      )
    );

  console.log(path.resolve(__dirname, '../../builds/docs'));
  var listener = server
    .use('/marklogic-samplestack/',
      serveStatic(
        path.resolve(__dirname, '../../builds/docs'),
        { redirect: false, index: ['index.html'] }
      )
    )
    .listen(8079, '0.0.0.0');

  listener.on('error', function (err) {
    console.log(err);
  });
  return server;
};

var apiToMd = function (
  content
) {
  return content;
  // var running = '';
  //
  // content = content.replace(/\n/g, ' ');
  //
  // content = content.replace(/(<h([\d])[^>]*>)/g, function (match, p1, digit) {
  //   return '\n\n' + Array(parseInt(digit) + 2).join('#') + ' ';
  // });
  //
  // content = content.replace(/(<[\/]h[\d]>)/g, '\n\n');
  //
  // return content;
};

var apiRecurse = function (dir, contentObj) {
  var fs = require('fs-extended');
  var content;
  var myPath;
  try {
    myPath = path.join(dir, 'index.html');
    content = fs.readFileSync(
      myPath, { encoding: 'utf8' }
    );

    contentObj.complete += '\n\n' + apiToMd(content);
    console.log(myPath);
  }
  catch (err) {}



  var files = fs.listFilesSync(dir, { sort: true, prependDir: true });
  files.forEach(function (file) {
    if (path.basename(file) !== 'index.html') {
      myPath = file;
      content = fs.readFileSync(
        myPath, { encoding: 'utf8' }
      );
      contentObj.complete += '\n\n' + apiToMd(content);
      console.log(myPath);
    }
  });
  var dirs = fs.listDirsSync(dir, { sort: true, prependDir: true });
  dirs.forEach(function (dir) {
    apiRecurse(dir, contentObj);
  });
};

gulp.task('testy', function (cb) {
  var fs = require('fs-extended');

  var contentObj = { complete: ''};
  apiRecurse(
    path.resolve(
      __dirname, '../../builds/docs/partials/api'
    ),
    contentObj
  );

  fs.writeFileSync(
    path.resolve(__dirname, '../../docs/api-reference.html'),
    contentObj.complete
  );
});


gulp.task('watch', ['assets'], function () {
  var helper = require('../helper');
  var buildParams = require('../../buildParams');
  var lazypipe = require('lazypipe');
  // make it easier to get to plugins
  var $ = helper.$;

  runWeb();

  var watcher = $.watch({
    glob: [
      path.resolve(__dirname, 'config/templates/**/*'),
      path.resolve(__dirname, '../../src/**/*')
    ],
    name: 'watch',
    emitOnGlob: false,
    emit: 'one',
    silent: true
  }, function (files, cb) {
    var dgeni = new Dgeni([require('./config')]);
    console.log('trigger');
    dgeni.generate().then(
      function () {
        // console.log(path.resolve(__dirname, 'app/src/**/*.js'));
        gulp.src('app/src/**/*.js')
          .pipe($.concat('docs.js'))
          .pipe(gulp.dest(outputFolder + '/js/'))
          .on('end', cb)
          .on('error', function (err) {
            console.log(err);
          });
      },
      function (err) {
        console.log(err);
      }
    );
  });
});

gulp.task('doc-gen', function () {
  return dgeni.generate().catch(function(error) {
    process.exit(1);
  });
});

// JSHint the example and protractor test files
gulp.task('jshint', ['doc-gen'], function() {
  gulp.src([outputFolder + '/ptore2e/**/*.js', outputFolder + '/examples/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});


// The default task that will be run if no task is supplied
// gulp.task('default', ['assets', 'doc-gen', 'build-app', 'jshint']);
gulp.task('default', ['assets', 'doc-gen', 'build-app']);
