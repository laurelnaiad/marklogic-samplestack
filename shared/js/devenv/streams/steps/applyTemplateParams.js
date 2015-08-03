var stepThrough = require('../stepThrough');
var duplex = require('event-stream').duplex;

// var template = function (options) {
//   var head = $.template(options);
//   var tail = head
//     .pipe($.debug())
//     .pipe(stepThrough({
//       onEach: function (s, file, cb) {
//         console.log(file.contents.toString());
//         s.push(file);
//         cb();
//       }
//     }));
//   return duplex(head, tail);
// };

module.exports = function (tier, context, options) {
  return stepThrough.tracked(
    {
      name: 'apply lodash templates (' + tier + ')',
      indentation: 3
    },
    $.template({ options: options })
    .on('error', function (err) {
      console.log(err);
    })
    // .on('end', function () {
    //   console.log('apply end (' + tier + ')');
    // })
    // stepThrough.dummy()
  );
};
