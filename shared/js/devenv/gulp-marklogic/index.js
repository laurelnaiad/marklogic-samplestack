var duplex = require('event-stream').duplex;
var through = require('through2');

module.exports = function (options) {
  var lib = require('requireindex')(__dirname);

  var head = through.obj(function (file, enc, cb) {
    this.push(file);
    cb();
  });
  var tail = head;

  var doBuild = options.build === 'clean' || options.build === 'full';
  if (options.build === 'clean') {
    console.log('TODO: dbclean');
    // tail = tail.pipe(lib.clean(options));
  }
  if (doBuild) {
    tail = tail
      .pipe(lib.initialize(options))
      .pipe(lib.configure(options))
      .pipe(lib.data(options));
  }
  tail = tail.pipe($.filelog());
  return duplex(
    head,
    tail
  )
  .on('data', function () { });
  //
  // .pipe(
  // .pipe($.filelog)();
  //
  //
  //
  // var targetFiles = merge(freshStream, inputStream);
  //
  // through.obj(function (file, enc, cb) {
  //
  // });
  //
  // var initStream = restInitStream(options);
  // initStream.on('end', function () {
  //
  // });

  // var initialized = false;
  // var onFile = function (file, enc, cb) {
  //
  // };
  // var split = through.obj(function (file, enc, cb) {
  //   if (!initialized) {
  //     onFile = onFile.bind(this);
  //     restInit({
  //
  //
  //
  //
  //     }).then(onFile.bind(this, file, enc, cb));
  //   }
  //   else {
  //     onFile.call(this, file, enc, cb);
  //   }
  //   console.log(file.path);
  //   this.push(file);
  //   cb();
  // });
  // return split;
};
