var Promise = require('bluebird');
var path = require('path');
var gulp = require('gulp');
var through = require('through2');
var ml = require('../marklogic');
var merge = require('event-stream').merge;
var duplex = require('duplexer');


var dataStream = function (options) {

  var prepareSeedData = function (options) {
    var request = require('request');
    var fs = require('fs');
    var targz = require('tar.gz');

    return new Promise(function (resolve, reject) {
      var seedFileName = path.basename(options.data.archiveUrl)
          .replace(/\.[^\.]*$/, '');
      var seedDir = path.join(
        options.data.directory, 'seed', seedFileName
      );

      try {
        // Query the entry
        if (fs.lstatSync(seedDir).isDirectory()) {
          return resolve();
        }
      }
      catch (err) {
        // Fetch http://example.com/foo.gz,
        // gunzip it and store the results in 'out'
        request(options.data.archiveUrl)
        .pipe(targz().createWriteStream(seedDir))
        .on('end', resolve)
        .on('error', reject);
      }

    });
  };

  var seedStream = through.obj(function (file, enc, cb) {
    this.push(file);
    cb();
  });

  var handlingSeed = new Promise(function (resolve, reject) {
    if (options.build === 'clean') {
      prepareSeedData(options).then(function () {
        resolve();
      }).catch(function (err) {
        reject(err);
      });
    }
    else {
      resolve();
    }
  });

  // files coming in through here are from the build
  var inStream = through.obj(function (file, enc, cb) {
    this.push(file);
    cb();
  }, function (cb) {
    var self = this;
    handlingSeed.then(function () {

      if (options.build !== 'clean') {
        seedStream.end();
      }
      else {
        var seedFileName = path.basename(options.data.archiveUrl)
            .replace(/\.[^\.]*$/, '');
        var seedDir = path.join(
          options.data.directory, 'seed', seedFileName
        );
        gulp.src(path.join(seedDir, '**/*'), { read: false } )
            .pipe(seedStream).on('data', function () { });
      }
      cb();
    }).catch(function (err) {
      self.emit('error', err);
    });
  });

  var filesStream = merge(inStream, seedStream);
  filesStream = duplex(
    inStream, filesStream
  );

  var batch = [];

  var handleDocument = function (options, file, handler) {
    handler.prepare(options, file);
    if (file.dd) {
      docs.push(file);
    }
  };

  var graphCount = 0;
  var handleGraph = function (options, file, handler) {
    handler.prepare(options, file);
    return ml.app.v1.graphs.write(
      options.data, file.dd.uri, file.dd.contentType, file.dd.content
    );
  };

  var loadBatch = function () {
    var afterPromises = [];
    var toWrite = [];
    _.each(docs, function (file) {
      if (file.dd) {
        toWrite.push(file.dd);
        if (file.handler.after) {
          afterPromises.push(file.handler.after);
        }
      }
    });
    docs = [];

    return ml.app.v1.documents.write(
      options.data,
      toWrite
    ).then(function () {
      if (afterPromises.length) {
        return Promise.all(afterPromises);
      }
    });
  };


  var docs = [];

  filesStream = filesStream.pipe(through.obj(function (file, enc, cb) {
    if (file.isDirectory()) {
      cb();
    }
    else {
      var handler = _.find(options.data.handlers, function (handler) {
        if (_.isRegExp(handler.match)) {
          return handler.match.test(file.path);
        }
      });
      file.handler = handler;

      if (handler) {
        switch (handler.type) {
          case undefined:
          case 'document':
            handleDocument(options, file, handler);
            if (docs.length === options.data.batchSize) {
              console.log('batch');
              loadBatch().then(cb.bind(null, null), cb);
            }
            else {
              cb();
            }
            break;
          case 'graph':
            console.log('graph');
            handleGraph(options, file, handler)
            .then(
              function () {
                cb();
              }, cb);
            break;
          default:
            return cb(new Error(
              'Unexpected data file type: ' + handler.type + ' in handler ' +
              'for ' + file.path
            ));
        }
      }
      else {
        return cb(new Error(
          'No handler found for ' + file.path
        ));
      }

    }

  }, function (cb) {
    var self = this;
    if (docs.length) {
      console.log('batch');
      loadBatch().then(
        cb,
        function (err) {
          self.emit('error', err);
          cb();
        }
      );
    }
    else {
      cb();
    }
  }));

  // filesStream = filesStream.pipe(through.obj(function (file, enc, cb) {
  //
  // }));
  return duplex(
    inStream, filesStream
  );

  // if (options.build === 'clean') {
  //   incomdingSstream =
  //   var seedStream = getSeedStream(options);
  // }
  // return stream;
  // var incoming = through.obj(function (file, enc, cb) {
  //   if (!promiseDone) {
  //
  //   }
  //
  // });
  // // this stream really just hooks into key stream events, it doesn't
  // // deal with the files in the build stream
  // var toFullfill = [];
  // var stream = through.obj(function (file, enc, cb) {
  //   var self = this;
  //   var residualPath = file.path.substr(file.base.length);
  //   var promise;
  //   if (residualPath === 'database-properties.json') {
  //     promise = databaseProperties(options, file);
  //   }
  //   else if (residualPath === 'rest-properties.json') {
  //     promise = restProperties(options, file);
  //   }
  //   else if (residualPath.indexOf('options/') === 0) {
  //     promise = restQueryOptions(options, file);
  //   }
  //   else if (residualPath.indexOf('services/') === 0) {
  //     promise = restResource(options, file);
  //   }
  //   else if (residualPath.indexOf('transforms/') === 0) {
  //     promise = restTransform(options, file);
  //   }
  //   else if (residualPath.indexOf('security/roles/') === 0) {
  //     promise = securityRoles(options, file);
  //   }
  //   else if (residualPath.indexOf('security/users/') === 0) {
  //     promise = securityUsers(options, file);
  //   }
  //   else if (residualPath.indexOf('data/builtin/') === 0) {
  //     promise = data(options, file);
  //   }
  //   toFullfill.push(promise);
  //   self.push(file);
  //   cb();
  // }, function (cb) {
  //   // flush function -- make sure we're really done with the promises
  //   Promise.all(toFullfill).then(
  //     cb.bind(this, null),
  //     cb
  //   );
  // }).on('data', function () { });
  //
  // return stream;
};

module.exports = dataStream;
