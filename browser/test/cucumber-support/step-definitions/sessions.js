module.exports = function () {
  this.World = World;
  var self = this;

  this.Given(/I am a contributor/, function (next) {
    this.authenticateAs('joeUser@marklogic.com', 'joesPassword')
      .then(this.notifyOk(next), next);
  });

  this.Given(/I am a visitor/, function (next) {
    this.authenticateAs()
      .then(this.notifyOk(next), next);
  });

  this.When(/start to log in/, function (next) {
    this.currentPage.loginStart().then(this.notifyOk(next), next);
  });

  this.When(/attempt to log in with invalid/, function (next) {
    return q.invoke(this.currentPage, 'loginEnterUserName', 'notJoeUser')
      .invoke('loginEnterPassword', ['not-his-password'])
      .invoke('loginSubmit')
      .then(this.notifyOk(next), next);
  });

  this.When(/login attempt is denied/, function (next) {
    expect(this.currentPage.loginIsDenied).to.eventually.equal(true)
      .and.notify(next);
  });

  this.When(
    /log in with insufficient password length/,
    function (next) {
      return q.invoke(
        this.currentPage, 'loginEnterUserName', 'joeUser@marklogic.com'
      )
        .invoke('loginEnterPassword', ['000'])
        .then(this.notifyOk(next), next);
    }
  );

  this.When(/not allowed to submit my credentials/, function (next) {
    expect(this.currentPage.loginSubmitEnabled)
        .to.eventually.equal(false).and.notify(next);
  });

  this.When(
    /log in as a Contributor/,
    function (next) {
      return q.invoke(
        this.currentPage, 'loginEnterUserName', 'joeUser@marklogic.com'
      )
        .invoke('loginEnterPassword', ['joesPassword'])
        .invoke('loginSubmit')
        .then(this.notifyOk(next), next);
    }
  );

  this.When(
    /I am logged in/,
    function (next) {
      expect(this.currentPage.isLoggedIn).to.eventually.equal(true)
        .and.notify(next);
    }
  );

};
