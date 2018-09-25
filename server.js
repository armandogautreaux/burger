// ----- Getting Dependencies -----
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

// ---- Setting PORT ------ //
var PORT = process.env.PORT || 3001;

// ---- Ussing Express ---- //
var app = express();

//---- Using static folder -----//
app.use(express.static('public'));

//---- Ussing body-parser ----//
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// --- Using Handlebars ----//
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// --- Declaring Routes -----//
var routes = require('./controllers/burger_controllers.js');
app.use(routes);

// --- Start Server (express)----//
app.listen(PORT, function() {
  console.log('App now listening at localhost: ' + PORT);
});
