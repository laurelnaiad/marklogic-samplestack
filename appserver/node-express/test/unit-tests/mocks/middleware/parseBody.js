var Promise = require('bluebird');

module.exports = {
  spyParseBody: function (sandbox) {
    var ssw = libRequire('samplestackWorker');
    return {
      json: sandbox.spy(
        ssw.mw.parseBody,
        'json'
      ),
      urlEncoded: sandbox.spy(
        ssw.mw.parseBody,
        'urlEncoded'
      )
    };
  }
};
