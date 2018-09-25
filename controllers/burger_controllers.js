// REQUIRE DEPENDENCIES
var express = require('express');
var router = express.Router();

// REQUIRE MODEL
var burger = require('../models/burger.js');

//Get Route
router.get('/', function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burger: data
    };
    res.render('index', hbsObject);
  });
});

//Post Route
router.post('/api/burgers', function(req, res) {
  burger.insertOne(
    ['burger_name', 'devoured'],
    [req.body.name, req.body.devoured],
    function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    }
  );
});

//Put Route
router.put('/api/burgers/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  burger.updateOne(
    {
      devoured: req.body.devoured
    },
    condition,
    function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

//EXPORT ROUTER
module.exports = router;
