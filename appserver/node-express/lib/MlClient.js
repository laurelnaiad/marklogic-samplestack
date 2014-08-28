var ml = require('marklogic');
var db;
var q = ml.queryBuilder;

module.exports = function (options) {
  console.log('construct');
  db = ml.createDatabaseClient(options.db.adminConnection);

  this.search = function (req, res, next) {
    db.query(
      q.slice(1, 50000)
    ).result(
      function (docs) {
        res.send(docs);
      },
      next
    );
  };
  console.log('constructed');
};
