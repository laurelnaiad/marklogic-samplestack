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
module.exports = function () {

  describe('tags',function () {

    var sandbox;
    var Promise = require('bluebird');
    var db = require('../../../lib/db-client');
    var connection = db.getGenericClient('admin','admin');
    var tags = require('../../../lib/db-client/tags')(connection);
    var mocks = require('../mocks');

    beforeEach(function () {
      sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
      sandbox.restore();
    });

    it('getTags', function (done) {
      var spec;
      var docResult;
      var ret;

      spec = {
        search: {
          qtext: [
            ''
          ],
          start: 1,
          timezone: 'America/Los_Angeles',
          pageLength: 10,
          forTag: 'acc',
          sort: 'name'
        }
      };
      docResult = mocks['db-client'].tags.docResult;
      ret = {
        'values-response': {
          name: 'tags',
          type: 'xs:string',
          'distinct-value': [
            {
              frequency: 2,
              _value: '.htaccess'
            },
            {
              frequency: 1,
              _value: 'accented-strings'
            },
            {
              frequency: 2,
              _value: 'accessibility'
            },
            {
              frequency: 1,
              _value: 'accordion'
            },
            {
              frequency: 1,
              _value: 'remote-access'
            }
          ],
          'aggregate-result': [
            {
              name: 'count',
              _value: '2815'
            }
          ],
          metrics: {
            'values-resolution-time': 'PT0.017104S',
            'aggregate-resolution-time': 'PT0.001282S',
            'total-time': 'PT0.197821S'
          },
          total: 5
        }
      };

      sandbox.stub(connection.documents, 'query', function (sp) {
        sp.should.deep.equal(spec);
        return {
          result: function () {
            return Promise.resolve(docResult);
          }
        };
      });

      tags.getTags(spec).then(function (gtRet) {
        gtRet.should.deep.equal(ret);
        done();
      });

    });


    it('getRelatedTags', function (done) {
      var spec;
      var getResult;
      var querySpec;
      var queryResult;
      var ret;
      spec = {
        search: {
          qtext: [
            ''
          ],
          start: 1,
          timezone: 'America/Los_Angeles',
          pageLength: 100,
          relatedTo: 'json',
          sort: 'frequency'
        }
      };
      getResult = [
        {
          contentType: 'application/json',
          format: 'json',
          contentLength: '711',
          content: {
            reltags: [
              'aiml',
              'ajax4jsf',
              'angularjs',
              'bson',
              'base64',
              'bookmarklet',
              'commonjs',
              'coolite',
              'dgml',
              'dxl',
              'delimiter',
              'dhtmlx',
              'docbook',
              'exslt',
              'ebxml',
              'ember.js',
              'fxml',
              'gson',
              'graphml',
              'html',
              'html5',
              'hijax',
              'icefaces',
              'idoc',
              'jquery',
              'json-ld',
              'json-rpc',
              'jsonp',
              'javascript',
              'javascriptmvc',
              'jsonml',
              'kxml',
              'lpod',
              'mathml',
              'messagepack',
              'mootools',
              'morfik',
              'opendocument',
              'openlaszlo',
              'qooxdoo',
              'riak',
              's-expression',
              'soap',
              'sxml',
              'sajax',
              'serialization',
              'smartclient',
              'spreadsheetml',
              'sproutcore',
              'voicexml',
              'wai-aria',
              'wddx',
              'wavemaker',
              'xbl',
              'xfa',
              'xhtml',
              'xlink',
              'xml',
              'xmlhttprequest',
              'xproc',
              'xslt',
              'xulrunner',
              'xajax',
              'yaml',
              'zimbra'
            ]
          }
        }
      ];
      querySpec = mocks['db-client'].tags.querySpec;
      queryResult = mocks['db-client'].tags.queryResult;
      ret = {
        'values-response': {
          name: 'tags',
          type: 'xs:string',
          'distinct-value': [
            {
              frequency: 1557,
              _value: 'javascript'
            },
            {
              frequency: 987,
              _value: 'jquery'
            },
            {
              frequency: 372,
              _value: 'html'
            },
            {
              frequency: 151,
              _value: 'xml'
            },
            {
              frequency: 45,
              _value: 'html5'
            },
            {
              frequency: 19,
              _value: 'xslt'
            },
            {
              frequency: 17,
              _value: 'angularjs'
            },
            {
              frequency: 14,
              _value: 'xhtml'
            },
            {
              frequency: 7,
              _value: 'jsonp'
            },
            {
              frequency: 5,
              _value: 'xmlhttprequest'
            },
            {
              frequency: 3,
              _value: 'bookmarklet'
            },
            {
              frequency: 2,
              _value: 'base64'
            },
            {
              frequency: 2,
              _value: 'gson'
            },
            {
              frequency: 1,
              _value: 'delimiter'
            },
            {
              frequency: 1,
              _value: 'mootools'
            },
            {
              frequency: 1,
              _value: 'riak'
            },
            {
              frequency: 1,
              _value: 'serialization'
            },
            {
              frequency: 1,
              _value: 'soap'
            }
          ],
          'aggregate-result': [
            {
              name: 'count',
              _value: '6192'
            }
          ],
          metrics: {
            'values-resolution-time': 'PT0.042069S',
            'aggregate-resolution-time': 'PT0.015168S',
            'total-time': 'PT0.529259S'
          }
        }
      };

      sandbox.stub(connection.resources, 'get', function (sp) {
        var exSpec = {
          name: 'relatedTags',
          params: {
            'tag':spec.search.relatedTo
          }
        };
        sp.should.deep.equal(exSpec);
        return {
          result: function () {
            return Promise.resolve(getResult);
          }
        };
      });

      sandbox.stub(connection.documents, 'query', function (sp) {
        sp.should.deep.equal(querySpec);
        return {
          result: function () {
            return Promise.resolve(queryResult);
          }
        };
      });

      tags.getRelatedTags(spec).then(function (grtRet) {
        grtRet.should.deep.equal(ret);
        done();
      });

    });


  });
};
