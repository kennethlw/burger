const connection = require("./connection.js");

// Object Relational Mapper (ORM)

const orm = {
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(table,col, vals, cb) {
    var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
    
    connection.query(queryString, [vals], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
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