var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(table, colName, colEaten, burgerName, burgerEaten) {
    var queryString = "INSERT into ?? (?, ?) VALUES (?, ?)";
    console.log(queryString);
    connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
      console.log(result);
    });
  },
  updateOne: function(cb) {
    var queryString = "SELECT * FROM burgers";

    connection.query(queryString, function(err, result) {
      console.log(result);
    });
  }
};

module.exports = orm;