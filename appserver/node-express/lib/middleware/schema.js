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

module.exports = function (app) {
  var jsonschema = require('jsonschema');
  var path = require('path');
  var validator = new jsonschema.Validator();

  var schemas = require(
    path.resolve(__dirname, '../../../../shared/schema')
  );

  _.each(schemas, function (schema, key) {
    var mySchema = validator.addSchema(schema);
  });
  //
  // // load the schemas using requireindex,etc
  //
  //   addSchema: function (schema) {
  //     validator.addSchema(schema);
  //     return validator.schemas[schema.id];
  //   },

  return {
    validate: function (schemaRef, req, res, next) {
      var validated = validator.validate(req.body, { $ref: schemaRef });
      if (validated.errors.length === 0) {
        next();
      }
      else {
        res.status(400).send({ error: validated.errors });
      }
    }
  };
};
