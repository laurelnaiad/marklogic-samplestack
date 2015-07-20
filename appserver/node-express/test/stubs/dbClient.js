  var options = sharedRequire('js/options');
  // STUB MARKLOGIC - var mlclient = require('marklogic');
  // then the use of this in db-client will be protected
  var mlclient = require('marklogic');
  var db = require('../../lib/db-client/');
  var anon = function() {};

  var stubDBClient = function(sandbox, stubbedModules) {

    sandbox.stub(db, 'execAsTransaction', function (ex) {
      var self = this;
      var txid;

      return this.transactions.open().result()
      .then(function (resp) {
        txid = resp.txid;
        return ex(txid);
      })
      .then(function (result) {
        return self.transactions.commit(txid).result()
        .then(function () {
          return result;
        });
      })
      .catch(function (err) {
        return self.transactions.rollback(txid).result()
        .thenThrow(err);
      });
    });

    sandbox.stub(db, 'getGenericClient', function (user, password) {
      return mlclient.createDatabaseClient(_.merge(
        options.middleTier.db.clientConnection,
        {
          user: user,
          password: password
        }
      ));
    });

    sandbox.stub(db, 'getBoundClient', function (user, password) {
      var boundClients = {};
      if (!boundClients[user]) {
        var connection = db.getGenericClient(user, password);
        var boundClient = {};

        var modules = {
          qnaDoc: stubbedModules.qnaDoc || anon,
          contributor: stubbedModules.contributor || anon,
          tags: stubbedModules.tags || anon,
          search: stubbedModules.search || anon
        };

        // have the individual modules handle binding themselves to the connection
        // by calling their exported function
        _.each(modules, function (mod, key) {
          boundClient[key] = mod(connection);
        });
        boundClient.transactions = connection.transactions;
        boundClient.execAsTransaction = db.execAsTransaction.bind(connection);
        boundClients[user] = boundClient;
      }
      return boundClients[user];
    });

  };

module.exports = stubDBClient;
