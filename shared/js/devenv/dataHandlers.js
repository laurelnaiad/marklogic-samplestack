var path = require('path');
var fs = require('fs');
var ml = require('./marklogic');

module.exports = function (options)  {
  return [
    {
      match: /\/com\.marklogic\.samplestack\.domain\.Contributor\//,
      prepare: function (options, file) {
        file.dd = {
          uri: 'com.marklogic.samplestack.domain.Contributor/' +
              path.basename(file.path),
          content: fs.readFileSync(
            file.path, { encoding: 'utf8'}
          ),
          collections: ['com.marklogic.samplestack.domain.Contributor'],
          permissions: [
            { 'role-name':'samplestack-guest', capabilities: ['read'] }
          ]
        };
      }
    },
    {
      match: /\.nt$/,
      type: 'graph',
      prepare: function (options, file) {
        var content = fs.createReadStream(file.path);
        content.pause();
        file.dd = {
          uri: '/dbpedia/' + path.basename(file.path),
          contentType: 'application/n-triples',
          content: content
        };
      },
      after: function (options, file) {
        return ml.client.put(options, {
          path: 'resources/graphPermSetter',
          json: {
            graphName: file.dd.uri
          }
        });
      }
    },
    {
      match: /\/questions\//,
      prepare: function (options, file) {
        file.dd = {
          uri: '/questions/' + path.basename(file.path),
          contentType: 'application/json',
          // forced to read the whole fle to check accepted
          // status -- alternative post-commit trigger is attractive
          // on for a variety of reasons
          content: JSON.parse(fs.readFileSync(
            file.path, { encoding: 'utf8'}
          ))
        };
        if (file.dd. content.accepted) {
          file.dd.permissions = [
            { 'role-name':'samplestack-guest', capabilities: ['read'] }
          ];
        }
      }
    }
    //
    //
    //   prepare: function (file) {
    //     file.dd = {
    //       // content: JSON.parse(
    //       //   fs.readFileSync(file.path, { encdoing: 'utf8' })
    //       // ),
    //       /*
    //         .withCollections("com.marklogic.samplestack.domain.Contributor")
    //         .withPermission("samplestack-guest", Capability.READ)
    //        */
    //       collections: ['com.marklogic.samplestack.domain.Contributor'],
    //       permissions: [
    //         { 'role-name':'samplestack-guest', capabilities: ['read'] }
    //       ]
    //     };
    //
    //   }
    //   // RDF triples
    //   /*
    //   void putRdf(client, uri, rdftriples) {
    //       def params = [:]
    //       params.path = "/v1/graphs"
    //       params.queryString = "graph="+uri
    //       params.contentType = "application/n-triples"
  	// 	params.body = new String(rdftriples.getBytes("UTF-8"))
    //       client.put(params)
    //   }
    //   void updateRdfPermissions(client, graphName) {
    //       logger.info("Updating permissions on RDF triples");
    //       def params = [:]
    //       params.path = "/v1/resources/graphPermSetter"
    //       params.contentType = "application/json"
  	// 	params.body = new String("{\"graphName\":\"" + graphName + "\"}")
    //       client.put(params)
    //   }
    //
    //    */
    // },
    // {
    //   // qnaDocs
    //   match: /^seed\/questions/,
    //   prepare: function  () {
    //     // load/parse the JSON b/c we need to look at the acceoted
    //     // flag
    //   }
    //   /*
    //   if (it.text.contains("accepted\":true")) {
    //     .withPermission("samplestack-guest", Capability.READ)
    //    */
    // }
    //   files: [
    //     'builtin/data/com.marklogic.samplestack.domain.Contributor/*.json'
    //   ],
    //   permissions: [
    //
    //   ],
    //   onRead: function () {
    //
    //
    //   },
    //   afterLoad: function () {
    //     // manually set permission
    //   }
    // }

  ];
};
