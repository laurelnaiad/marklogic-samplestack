var stepThrough = require('../stepThrough');
module.exports = function (context, options) {
  return stepThrough.tracked(
    {
      name: 'embed LiveReload',
      indentation: 3
    },
    $.embedlr( { port: options.port } )
  );
};
