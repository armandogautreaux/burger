var orm = require('../config/orm.js');
var burger = {
  selectAll: function(cb) {
    //The next orm method displays the complete table data
    orm.selectAll('burgers', function(res) {
      cb(res);
    });
  },
  //The next orm method allows us to insert one value in one specific column
  insertOne: function(cols, vals, cb) {
    orm.insertOne('burgers', cols, vals, function(res) {
      cb(res);
    });
  },
  //The next orm method allows us to update a value in one specific column whenever the condition is met.
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne('burgers', objColVals, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
