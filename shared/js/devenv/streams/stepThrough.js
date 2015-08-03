var through = require('through2');
var Promise = require('bluebird');
var _ = require('lodash');
var lazypipe = require('lazypipe');
var chalk = require('chalk');


var Step = function () {
};

Step.prototype.stepPromise = function (out) {
  return Promise.resolve(null);
};

Step.prototype.onInit = function (out, cb) {
  cb();
};

Step.prototype.onFlush = function (out, cb) {
  cb();
};


Step.prototype.onEach = function (out, file, cb) {
  out.push(file);
  cb();
};

Step.prototype.makeStream = function (options) {
  var self = this;
  var inited = false;
  _.each(options, function (option, key) {
    if (_.isFunction(option)) {
      var orig;
      orig = self[key];
      self[key] = option.bind(self);
    }
  });

  var me = through.obj(
    function (file, enc, cb) {
      /* jscs: disable */
      var stream = this;
      /* jscs: enable */
      var init = function (cb) {
        if (self.onInit) {
          self.onInit(stream, function (err, data) {
            if (err) {
              return cb(err);
            }
            inited = true;
            cb();
          });
        }
        else {
          inited = true;
          cb();
        }
      };
      var promised = self.stepPromise;
      var promise = function () {
        return self.stepResolve = self.stepPromise(stream);
      };
      var onEach = function () {
        if (self.onEach) {
          self.onEach(stream, file, cb);
        }
        else {
          try {
            stream.push(file);
            cb();
          }
          catch (e) {
            cb(e);
          }
        }
      };

      if (!inited) {
        init(function (err) {
          if (self.stepPromise) {
            try {
              promise();
            }
            catch (e) { return cb(e); }
          }
          onEach();
        });
      }
      else {
        onEach();
      }
    },
    // _flush
    function (cb) {
      var stream = this;
      // resolve the step-long async operation, call onFlush, then cb
      Promise.resolve(self.stepResolve)
      .then(function (err, data) {
        if (self.onFlush) {
          self.onFlush(stream, cb);
        }
        else {
          cb();
        }
      });
    }
  );

  if (self.onEnd) {
    me.on('end', self.onEnd);
  }
  if (self.onFinish) {
    me.on('finish', self.onFinish);
  }
  return me;

};

var stepThrough = function (options) {
  var step = new Step();
  return step.makeStream(options);
};

stepThrough.wrap = function (startOptions, endOptions, stream) {
  return lazypipe()
    .pipe(stepThrough, startOptions)
    .pipe(function () { return stream; })
    .pipe(stepThrough, endOptions)();
};

stepThrough.tracked = function (options, stream) {
  if (_.isString(options)) {
    options = { name: options, indentation: 1 };
  }
  var startTime;
  return stepThrough.wrap(
    {
      onInit: function (s, cb) {
        startTime = new Date();
        $.util.log(
          /* jshint ignore:start */
          Array(options.indentation + 1).join(' ') +
          'Started \'' + chalk.cyan(options.name) + '\''
          /* jshint ignore: end */
        );
        cb();
      }
      // onInit: function (s, cb) {
      //   setTimeout(
      //     function () {
      //       startTime = new Date();
      //       $.util.log(
      //         /* jshint ignore:start */
      //         Array(options.indentation + 1).join(' ') +
      //         'Started \'' + chalk.cyan(options.name) + '\''
      //         /* jshint ignore: end */
      //       );
      //       cb();
      //     },
      //     1
      //   );
      // }

    },
    {
      // onFlush: function (s, cb) {
      //   var diff = Math.abs(new Date() - startTime);
      //   $.util.log(
      //     /* jshint ignore:start */
      //     Array(options.indentation + 1).join(' ') +
      //     'Finished \'' +
      //     chalk.cyan(options.name) +
      //     '\' after ' +
      //     chalk.magenta(diff + ' ms')
      //     /* jshint ignore: end */
      //   );
      //   cb();
      // }
      onEnd: function () {
        if (startTime) {
          var diff = Math.abs(new Date() - startTime);
          $.util.log(
            /* jshint ignore:start */
            Array(options.indentation + 1).join(' ') +
            'Finished \'' +
            chalk.cyan(options.name) +
            '\' after ' +
            chalk.magenta(diff + ' ms')
            /* jshint ignore: end */
          );
        }
      }
    },
    stream
  );
};

stepThrough.dummy = function () {
  return through.obj(function (f, c, cb) {
    this.push(f);
    cb();
  });
};


module.exports = stepThrough;

//
//  (options, flags) {
//   var doOnFirst = function (file, enc) {
//
//   }
//   return through(function (file, enc, cb) {
//     if (!this.initialized) {
//       this.initialized = doOnFirst(file, enc);
//     }
//     doOnEach(file, enc, cb);
//   }, doOnFlush);
// }
//
// step.prototype.onFirst = function (file, enc) {
//   return {};
// };
//
// step.prototype.onEach = function (file, enc, cb) {
//   this.push(file);
//   cb();
// };
//
// step.prototype.onFlush = function (cb) {
//   cb();
// };
//
// module.exports = step;
//
//
// function pStep (options, flags) {
//   return through(function (file, enc, cb) {
//     if (!this.state) {
//       this.state = this.getAsyncState(file, enc);
//     }
//     return this.onEach(file, enc).then(cb)
//   }, function (cb) {
//     return this.stateResovled().then(cb);
//   });
// }
