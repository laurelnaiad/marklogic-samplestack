/*
 * Copyright 2012-2015 MarkLogic Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _ = require('lodash');

var options = libRequire('../options');

var mlclient = require('marklogic');
require('./hookStartRequest');

var boundClients = {};

/**
 * Function for opening and executing any passed function as a transaction.
 * This requires the passed function to accept a transaction ID for use within
 * it's own calls to the MarkLogic Node.js API.  The called function also must
 * return a Promise which when resolved will trigger commit() of the
 * transaction or rollback, if that commit fails.
 *
 * @param  {Function} ex The function to execute as a transaction.
 * @return {Object} The mlrest.startRequest response after passing it our
 * transformed operation object.
 */
var execAsTransaction = function (ex) {
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
};

/**
 * Function for creating a database client connection to the ML database.
 *
 * @param  {String} user The ML user.
 * @param  {String} password The ML password.
 * @return {Object} The mlrest.createDatabaseClient() client object.
 */
var getClient = function (user, password) {
  return mlclient.createDatabaseClient(_.merge(
    options.db.clientConnection,
    {
      user: user,
      password: password
    }
  ));
};

/**
 * Function for creating a database client connection to the ML database with
 * bound modules for qnaDoc, contributor, tags and search db-clients.
 *
 * @param  {String} user The ML user.
 * @param  {String} password The ML password.
 * @return {Object} The object containing all bound ML db client objects.
 */
var getBoundClient = function (user, password) {
  if (!boundClients[user]) {
    var connection = getClient(user, password);
    var boundClient = {};

    var modules = {
      qnaDoc: require('./qnaDoc'),
      contributor: require('./contributor'),
      tags: require('./tags'),
      search: require('./search')
    };

    // have the individual modules handle binding themselves to the connection
    // by calling their exported function
    _.each(modules, function (mod, key) {
      boundClient[key] = mod(connection);
    });
    boundClient.transactions = connection.transactions;
    boundClient.execAsTransaction = execAsTransaction.bind(connection);
    boundClients[user] = boundClient;
  }
  return boundClients[user];
};


module.exports = {
  getBoundClient: getBoundClient,
  getGenericClient: getClient,
  execAsTransaction: execAsTransaction
};
