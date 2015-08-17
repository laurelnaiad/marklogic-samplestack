var gulp = require('gulp');
var through = require('through2');
var ml = require('../marklogic');

var marklogicInit = function () {
  process.stdout.write(
    'Initialize MarkLogic instance if necessary... '
  );
  return ml.admin.v1.init()
  .then(function (didDo) {
    if (didDo) {
      console.log('done.');
    }
    else {
      console.log('already done.');
    }
  });
};

var adminInit = function (credentials) {
  process.stdout.write(
    'Initialize MarkLogic Administrator Acccount if necessary... '
  );
  return ml.admin.v1.instanceAdmin(credentials)
  .then(function (didDo) {
    if (didDo) {
      console.log('done.');
    }
    else {
      console.log('already done.');
    }
  });
};

var testCredentials = function (credentials) {
  return ml.admin.v1.timestamp(credentials)
  .then(
    function (res) {
      if (res.statusCode < 300) {
        return;
      }
      throw new Error(
        'User "' + credentials.username +
        '" cannot log in with the configured password.'
      );
    }
  );
};


var restInit = function (options) {
  process.stdout.write(
    'Initialize REST application "' + options.appName +
    '" on port ' + options.appPort + ' if necessary...'
  );
  return ml.manage.v1.restApis.get(options)
  .then(function (res) {
    if (res.statusCode === 404) {
      return ml.manage.v1.restApis.post(options)
      .then(function (res) {
        // configureAll means we need to configure or reconfigure
        // the entire REST server regardless of how many files started out
        // in the stream;
        console.log('done.');
        return true;
      });
    }
    else {
      if (parseInt(res.port) !== options.appPort) {
        process.stdout.write(
          'Port mismatch. Removing REST application... '
        );
        return ml.manage.v1.restApis.delete(options)
        .then(function () {
          process.stdout.write(
            'Replacing REST application... '
          );
        })
        .then(ml.manage.v1.restApis.post.bind(null, options))
        .then(function () {
          // configureAll means we need to configure or reconfigure
          // the entire REST server regardless of how many files started out
          // in the stream;
          console.log('done.');
          return true;
        });
      }
      else {
        console.log('already done.');
      }
    }
  });
};

var initializerStream = function (options) {
  var didInit = false;
  var initialized = false;
  return through.obj(function (file, enc, cb) {
    var self = this;
    if (!initialized) {
      initialized = true;
      marklogicInit(options)
      .then(adminInit.bind(null, options))
      .then(testCredentials.bind(null, options))
      .then(restInit.bind(null, options)).then(function (didDo) {
        didInit = didDo;
        if (!didInit) {
          self.push(file);
        }
        cb();
      });
    }
    else {
      if (!didInit) {
        self.push(file);
      }
      cb();
    }
  }, function (cb) {
    var self = this;
    // flush function -- if the REST server was initialized, we'll not
    // have pushed any files because we want a fresh set of all files

    if (didInit) {
      gulp.src(options.allFilesGlob)
      // jam a complete set of files into this pipe before
      // allowing flush to complete
      .pipe(through.obj(function (file, enc, cb) {
        self.push(file);
        cb();
      })).on('end', cb).on('data', function () { });
    }
    else {
      cb();
    }
  });
};

module.exports = initializerStream;
