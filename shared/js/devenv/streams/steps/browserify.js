var through = require('through2');
var stepThrough = require('../stepThrough');
module.exports = function () {
  var browserify = require('browserify');
  return stepThrough.tracked(
    {
      name: 'browserify',
      indentation: 3
    },
    through.obj(function (file, enc, cb) {
      var self = this;
      file.contents = browserify({ entries: [ file.path ] }).bundle(
        function (err, val) {
          file.contents = val;
          self.push(file);
          cb();
        }
      );
    })
  );
};
