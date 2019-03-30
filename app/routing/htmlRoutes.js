var express = require("express");
var path = require('path');
var app = express.Router();

// A GET Route to `/survey` which should display the survey page.
app.get('/survey', function(req, res){
  console.log(__dirname);
  console.log(path.join(__dirname,'../public/survey.html'));
  res.sendFile(path.join(__dirname, '../public/survey.html'));
})


// A default, catch-all route that leads to `home.html` which displays the home page.
app.use('/', function(req, res){
  res.sendFile(path.join(__dirname, '../public/home.html'));
})

module.exports = app;