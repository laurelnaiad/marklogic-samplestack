/*
 * Copyright 2012-2015 MarkLogic Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// TODO docs

var path = require('path');
var bowerFiles = require('main-bower-files');
var merge = require('merge-stream');
var stepThrough = require('../stepThrough');
var through = require('through2');
var Promise = require('bluebird');
var gulp = require('gulp');
var lazypipe = require('lazypipe');
var globs = require('../../globs');
// var rebaser = require('../rebaser');
var duplex = require('event-stream').duplex;


var paths = {
  bowerJson: path.join(globs.browserDir, 'bower.json'),
  bowerDirectory: path.join(globs.browserDir, 'bower_components')
};

var bowerStream = function () {
  // console.log('BOWERSTREAMBOWERSTREAMBOWERSTREAMBOWERSTREAMBOWERSTREAM');
  var src = gulp.src(
    bowerFiles({
      includeDev: true,
      // debugging: true,
      dependencies: false,
      read: true,
      paths: paths
    }), { base: paths.bowerDirectory }
  );

  var tail = src
    .pipe(through.obj(function (file, enc, cb) {
      file.tier = 'browser';
      file.base = globs.projectDir;
      file.path = file.path.replace(
        '/browser/bower_components', '/browser/deps'
      );
      // console.log('a SPUN: ' + file.path);
      // file.base = file.base.replace(
      //   '/browser/bower_components', '/browser/deps'
      // );
      this.push(file);
      cb();
    }));

  return duplex(src, tail);
};

// copy all of the bower components runtime deps to the build
// and unit targets.
// also, for unit targets, copy the dev dependencies that have
// an oerride that indicates they are needed for the unit target
//
module.exports = function (context, options) {
  var once = false;
  var myBowerStream;
  var bowerDone;
  var bowerPromise = new Promise(function(resolve, reject) {
    bowerDone = function () {
      // console.log('bower done');
      resolve();
    };
  });

  var bowerSkip = stepThrough.dummy();
  var bowerOut = stepThrough.dummy();

  // var me = stepThrough.tracked(
  //   { name: 'bower files', indentation: 1 },

  var kickoff = stepThrough({
    onEach: function (s, file, cb) {
      // console.log('bower in');
      var fName = path.basename(file.path);
      // console.log(fName);
      if (fName === 'bower.json' || fName === '.bowerrc') {
        if (!once) {
          // console.log('ONCEONCEONCEONCEONCEONCEONCEONCEONCEONCEONCE');
          // console.log('bower kick');
          once = true;
          myBowerStream = bowerStream(true);
          myBowerStream.pipe(bowerOut);
          myBowerStream.on('end', bowerDone);
        }
        // s.push(file);
        cb();
      }
      else {
        // console.log('bower skip');
        bowerSkip.write(file);
        s.push(file);
        cb();
      }
    },
    onFlush: function (s, cb) {
      // // console.log('BOWERRRRRRRRRRRRR');
      // bowerSkip.end();
      // if (myBowerStream) {
      //   myBowerStream.end();
      // }
      //
      //
      if (myBowerStream) {
        bowerPromise.then(function () {
          bowerSkip.end();
          if (myBowerStream) {
            myBowerStream.end();
          }
          cb();
        });
      }
      else {
        // console.log('no bower seen');
        bowerSkip.end();
        bowerOut.end();
        cb();
      }

    }
  });
      // onFlush: function (s, cb) {
      //   if (myBowerStream) {
      //     bowerPromise.then(function () {
      //       console.log('bowerOut end');
      //       // bowerOut.end();
      //       cb();
      //     });
      //   }
      //   else {
      //     console.log('bowerOut end');
      //     // manually end bowerout if we never processed bower
      //     bowerOut.end();
      //     cb();
      //   }
      // }
  //   });
  // };

  var passthrough = function () {
    return stepThrough.dummy();
  };

  var merged = merge(bowerSkip, bowerOut)
        .on('end', function () {
          // console.log('#BOWER# parts merged');
        });



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

  return stepThrough.tracked(
    { name: 'bower files', indentation: 3 },
    duplex(kickoff, merged)
      // .pipe(kickoff)
      // .pipe(merged)
      // .pipe($.filelog)
      // // .pipe(renamed)
      // ()
  );
};
//
//
//       }
//
//           var stream;
//           switch (envName) {
//             case 'app':
//               stream = bowerBuildStream(true);
//                 // .pipe($.filelog())
//                 // .pipe(gulp.dest(
//                 //   path.resolve(__dirname, '../../builds/app/static/deps')
//                 // )).on('end', function () {
//                 //   console.log('end 1');
//                 // });
//               break;
//             case 'test':
//               stream = bowerUnitStream(true);
//                 // .pipe(gulp.dest(
//                 //
//           //path.resolve(__dirname, '../../builds/test-debug/static/deps')
//                 // ));
//               break;
//           }
//
//           stream.on('end', function () {
//             cb();
//           });
//         }
//       },
//       {},
//       var fName = path.basename(file.path);
//       if (fName === 'bower.json' || '.bowerrc') {
//         if (!once) {
//           once = true;
//           bowerStream(true).then(cb);
//         }
//         else {
//           cb();
//         }
//       }
//       else {
//         this.push(file);
//         cb();
//       }
//
//     )
//   );
//
//
//
//
//   var once = false;
//   var myBowerFiles;
//
//   // var bowerFilesApp = steps.bowerFiles('app');
//   // if we do a non-debug build we'll use somethig other than 'test'
//   // b/c we won't want devDependencies
//   // var bowerFiles = steps.bowerFiles('test');
//   var doBower = through.obj(function (file, enc, cb) {
//     var fName = path.basename(file.path);
//     if (fName === 'bower.json' || '.bowerrc') {
//       if (!once) {
//         once = true;
//         bowerStream(true).then(cb);
//       }
//       else {
//         cb();
//       }
//     }
//     else {
//       this.push(file);
//       cb();
//     }
//   });
//
//
//
//     var fName = path.basename(file.path);
//     if (fName === 'bower.json' || '.bowerrc') {
//       bowerProcessor.write(file);
//     }
//     else {
//       passthrough.write(file);
//     }
//     cb();
//   }, function (cb) {
//     bowerProcessor.end();
//     passthrough.end();
//   });
//
//   var conditionallyDoBower = function
//
//
//   return merge(bowerFiles, passthrough);
//
// };
//
// //
// //   var dummy = through.obj(function (file, enc, cb) {
// //     cb();
// //   });
// //
// //
// //   };
// //
// //
// //     return lazypipe()
// //
// //     .pipe()
// //             case 'bower.json':
// //             case '.bowerrc':
// //
// //     });
// //     var bowerFiles =
// //     if (
// //       file.path.indexOf(file.base + '/bower.json') === 0 ||
// //       file.path.indexOf(file.base + '.bowerrc') === 0
// //     ) {
// //       bowerFiles.write(file);
// //     }
// //
// //     if (file.path.indexOf(file.base + '/bower_components/') === 0) {
// //       file.path = file.path.replace('/bower_components/', '/deps/');
// //
// //
// //
// //
// //
// //   return stepThrough.tracked(
// //     { name: 'bower files', indentation: 1 },
// //     stepThrough.wrap(
// //       {
// //         onInit: function (s, cb) {
// //           var stream;
// //           switch (envName) {
// //             case 'app':
// //               stream = bowerBuildStream(true);
// //                 // .pipe($.filelog())
// //                 // .pipe(gulp.dest(
// //         //   path.resolve(__dirname, '../../builds/app/static/deps')
// //                 // )).on('end', function () {
// //                 //   console.log('end 1');
// //                 // });
// //               break;
// //             case 'test':
// //               stream = bowerUnitStream(true);
// //                 // .pipe(gulp.dest(
// //       //   path.resolve(__dirname, '../../builds/test-debug/static/deps')
// //                 // ));
// //               break;
// //           }
// //
// //           stream.on('end', function () {
// //             cb();
// //           });
// //         }
// //       },
// //       {},
// //       dummy
// //     )
// //   );
// // };
