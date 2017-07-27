const express = require('express');
const router = express.Router();
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get('/', function(req, res) {
  res.redirect('/index');
});

//get all the burgers 
router.get('/index', function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

//adding a burger to the list
router.post('/create', function(req, res) {
  burger.create(['burger_name'], [req.body.burger_name], function(data) {
    res.redirect('/index');
  });
});

router.put("/:id", function(req, res) {
  var condition = req.params.id;

  console.log(condition);
  burger.update({'devoured': req.body.devoured}, condition, function(data) {
    res.redirect('/index');
  });
});

// Export routes for server.js to use.
module.exports = router;