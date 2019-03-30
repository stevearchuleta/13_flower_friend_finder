// Dependencies
var express = require("express");
var path = require("path");
// Sets up the Express App
// Create an instance of the express app.
var app = express();
// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("app/public"));

var apiRoute = require('./app/routing/apiRoutes');
var htmlRoute = require('./app/routing/htmlRoutes');

app.use(apiRoute);
app.use(htmlRoute);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});





