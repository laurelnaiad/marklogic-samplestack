var util = require('util');

function PageBase () {
  var self = this;

  var qself = self.qself = function (value) {
    return q(value).thenResolve(self);
  };

  Object.defineProperty(self, 'pageTitle', {
    get: function () {
      return browser.getTitle();
    }
  });

  Object.defineProperty(self, 'loginElement', {
    get: function () {
      return element(by.css('.ss-login a'));
    }
  });

  self.loginStart = function () {
    return qself(self.loginElement.click());
  };

  self.loginCancel = function () {
    return qself(
      element(by.css('.ss-dialog-login .ss-button-cancel')).click()
    );
  };

  Object.defineProperty(self, 'loginSubmitButton', {
    get: function () {
      return element(by.css('.ss-button-submit'));
    }
  });

  self.loginSubmit = function () {
    return qself(self.loginSubmitButton.click());
  };

  Object.defineProperty(self, 'loginSubmitEnabled', {
    get: function () {
      return self.loginSubmitButton.isEnabled();
    }
  });

  Object.defineProperty(self, 'loginUserNameElement', {
    get: function () {
      return element(by.className('ss-input-username'));
    }
  });

  Object.defineProperty(self, 'loginPasswordElement', {
    get: function () {
      return element(by.className('ss-input-password'));
    }
  });

  self.loginEnterUserName = function (userName) {
    return qself(
      self.loginUserNameElement
      .clear()
      .sendKeys(userName)
    );
  };

  self.loginEnterPassword = function (password) {
    return qself(self.loginPasswordElement
      .clear()
      .sendKeys(password)
    );
  };

  Object.defineProperty(self, 'loginFailedMessage', {
    get: function () {
      return element(by.css('.ss-dialog-login .login-failed'));
    }
  });

  Object.defineProperty(self, 'loginIsDenied', {
    get: function () {
      var msg = self.loginFailedMessage;
      return msg.isDisplayed().then(
        function (isVisible) {
          return isVisible && msg.getText().then(
            function (text) {
              return text.indexOf('Unauthorized') >= 0;
            }
          );
        }
      );
    }
  });

  self.login = function (userName, password) {
    return q.invoke(self, 'loginStart')
      .invoke('loginEnterUserName', userName)
      .invoke('loginEnterPassword', password)
      .invoke('loginSubmit');
  };

  /*
   * Search Bar related lookups and operations added to Page Base
   * so they can be accessed by the QnA page tests as well
   */
  Object.defineProperty(this, 'queryText', {
    get: function () {
      return element(by.model('searchbarText')).getText();
    }
  });

  Object.defineProperty(self, 'searchbarTextElement', {
    get: function () {
      return element(by.model('searchbarText'));
    }
  });

  Object.defineProperty(self, 'searchbarSumbmitElement', {
    get: function () {
      return element(by.css('.ss-search-bar-tools button'));
    }
  });

  self.enterSearchText = function (text) {
    return qself(self.searchbarTextElement
      .clear()
      .sendKeys(text)
    );
  };

  self.searchSubmit = function () {
    return self.searchbarSumbmitElement.click();
  };

  self.search = function (text) {
    return self.enterSearchText(text)
      .then(self.searchSubmit);
  };

  Object.defineProperty(self, 'accountInfoElement', {
    get: function () {
      return element(by.className(
        'ss-user-info-display-name-reputation'
      )).then(
        function (el) { return el; },
        function () { return null; }
      );
    }
  });

  Object.defineProperty(self, 'accountInfoLabel', {
    get: function () {
      return self.accountInfoElement.then(
        function (el) {
          return el ? el.getText() : null;
        }
      );
    }
  });

  Object.defineProperty(self, 'userReputation', {
    get: function () {
      return self.accountInfoLabel.then(
        function (label) {
          return label ? parseInt(label.match(/[^\[]*\[([^\]]*)\]/)) : null;
        }
      );
    }
  });

  Object.defineProperty(self, 'userName', {
    get: function () {
      return self.accountInfoLabel.then(
        function (label) {
          return label ? label.replace(/ \[.*$/, '') : null;
        }
      );
    }
  });

  Object.defineProperty(self, 'isLoggedIn', {
    get: function () {
      return self.userName.then(
        function (userName) {
          return !!userName;
        },
        function () { return false; }
      );
    }
  });


  self.accountDropdownOpen = function () {
    return q(self.accountInfoElement.then(
      function (el) {
        if (el) {
          return el.click();
        }
        else {
          throw new Error('cannot find accountInfoElement');
        }
      }
    ));
  };

  Object.defineProperty(self, 'logoutButton', {
    get: function () {
      return element(by.css('.ss-account-dropdown button'));
    }
  });

  self.logout = function () {
    return qself(self.accountDropdownOpen().then(function () {
      return self.logoutButton.click();
    }));
  };

  self.loginIfNecessary = function (userName, password) {
    return qself(self.userName.then(
      function (name) {
        return qself(self.logoutIfNecessary())
            .invoke( "login", userName, password);
      }
    ));
  };

  self.logoutIfNecessary = function () {
    return qself(self.isLoggedIn.then(
      function (isLoggedIn) {
        if (isLoggedIn) {
          return self.logout();
        }
        else {
          return self;
        }
      }
    ));
  };
}

PageBase.instantiate = function (Page) {
  util.inherits(Page, PageBase);
  return new Page();
};

module.exports = PageBase;
