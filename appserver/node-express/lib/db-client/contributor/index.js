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

var mlclient = require('marklogic');
var qb = mlclient.queryBuilder;
var pb = mlclient.patchBuilder;
var meta = require('./meta');
var util = libRequire('db-client/util');

var funcs = {};

/**
 * Handle an update to a contributor's reputation by patch the document.
 *
 * @param  {String} txid The transaction ID.
 * @param  {String} id The contributor ID.
 * @param  {Number} repChange Increment or decrement value.
 * @return {Promise} A promise object.
 */
funcs.patchReputation = function (txid, id, repChange) {
  // add (or subtract) from reputation property
  var req = {
    txid: txid,
    uri: meta.getUri(id),
    operations: [
      pb.replace('reputation', pb.add(repChange))
    ]
  };
  return this.documents.patch(req).result()
  .then(function(r) {
    return r;
  })
  .then(function(r) {
    var resp = meta.responseToSpec(r);
    return resp;
  })
};

/**
 * Handle an update to a contributor's voteCount by patching the document.
 *
 * @param  {String} txid The transaction ID.
 * @param  {String} id The contributor ID.
 * @param  {Number} increment Increment or decrement value.
 * @return {Promise} A promise object.
 */
funcs.patchVoteCount = function (txid, id, increment) {
  var req = {
    txid: txid,
    uri: meta.getUri(id),
    operations: [
      pb.replace('voteCount', pb.add(increment))
    ]
  };
  return this.documents.patch(req).result()
  .then(function(r) {
    return r;
  })
  .then(function(r) {
    var resp = meta.responseToSpec(r);
    return resp;
  })
};

funcs.getUniqueContent = function (txid, spec) {
  console.log('getUniqueContent txid')
  console.log(txid)
  console.log('getUniqueContent spec')
  console.log(require('util').inspect(spec, { depth: null }));
  var self = this;
  // if given id, we can do this more efficinetly by reading via URI
  // otheriwse, we search
  if (spec.id) {
    console.log('SPEC ID')
    var sp = {
      txid: txid,
      uris: [ meta.getUri(spec.id) ]
    };
    return this.documents.read(sp).result()
    .then(function(r) {
      return r;
    })
    .then(util.getOnlyContent)
    .then(util.unwrapPojo)
    .then(function(r) {
      return r;
    });
  }
  else {
    console.log('!SPEC ID')
    var built = qb.where(
      qb.directory(meta.baseUri),
      qb.value('userName', spec.userName)
    );
    console.log('getUniqueContent documents.query built')
    console.log(require('util').inspect(built, { depth: null }));
    return this.documents.query(
      built
    ).result()
    .then(function(r) {
      console.log('getUniqueContent documents.read resp')
      console.log(require('util').inspect(r, { depth: null }));
      return r;
    })
    .then(util.getOnlyContent)
    .then(util.unwrapPojo)
    .then(function(r) {
      console.log('getUniqueContent documents.read FINAL resp')
      console.log(require('util').inspect(r, { depth: null }));
      return r;
    });
  }
};

module.exports = function (connection) {
  // create an object with the funcs all bound to the given connection
  var self = {};
  _.each(funcs, function (func, name) {
    self[name] = func.bind(connection);
  });
  return self;
};
