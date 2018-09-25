var dotenv = require('dotenv');
dotenv.config();

// REQUIRE MYSQL DEPENDENCY

var mysql = require('mysql');

var { DB_USER, DB_PASS, DB_NAME } = process.env;

//CREATE CONNECTION
var config = {
  port: 8889,
  host: 'localhost',
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME
};

var connection;
var host;

if (process.env.JAWSDB_URL) {
  var connection = mysql.createConnection(process.env.JAWSDB_URL);
  host = 'JAWSDB';
} else {
  connection = mysql.createConnection(config);
  host = 'localhost';
}

connection.connect(function(err) {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  } else {
    console.log('connected with ' + host);
  }
});

//EXPORT CONNECTION
module.exports = connection;
