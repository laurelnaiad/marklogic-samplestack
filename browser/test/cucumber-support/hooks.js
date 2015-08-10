var afterFeatures = function () {
  this.registerHandler('AfterFeatures', function (event, callback) {

    browser.executeAsyncScript(function () {
      if (window.__coverage__) {
        $.ajax({
          type: 'POST',
          url: '/coverage/client',
          data: JSON.stringify(window.__coverage__),
          contentType: 'application/json'
        }).done(arguments[arguments.length - 1]);
      }
      else {
        arguments[arguments.length - 1]();
      }
    }).then(callback);


    // console.log('after features');
    // browser.executeScript(function () {
    //   window.goCount = window.goCount ? window.goCount + 1 : 1;
    //   return window.goCount;
    // }).then(function (goCount) {
    //   console.log('FINAL GO COUNT ' + goCount);
    // }).then(callback);
  });

};

module.exports = afterFeatures;
