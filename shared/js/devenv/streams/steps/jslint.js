var lazypipe = require('lazypipe');
var stepThrough = require('../stepThrough');
var duplex = require('event-stream').duplex;

module.exports = function (tier, context, options) {

  var head = $.jshint();
  var tail = head
    // .pipe($.plumber())
    .pipe($.jscs()).on('error', function (err) {
      // console.log(err.toString());
      // this.emit('end');
    })
    .pipe($.jscsStylish.combineWithHintResults())
    .pipe($.jshint.reporter('jshint-stylish'))
    ;
    // .pipe($.jscs()).on('error', function (err) {
    //   // console.log(err.toString());
    //   // this.emit('end');
    // });
    // .pipe($.jscsStylish());

  return stepThrough.tracked(
    {
      name: 'linters (' + tier + ')',
      indentation: 3
    },
    duplex(head, tail)
    // lazypipe()
    //   .pipe($.jshint)
    //   .pipe($.jshint.reporter, 'jshint-stylish')()
  );
};
