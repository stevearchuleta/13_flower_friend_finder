
// Ask if require('../data.friends.js') is necessary here.
// var friends = require('../data.friends.js');

var express = require("express");
var app = express.Router();
var friends = require('../data/friends')

// DISPLAY A JSON OF ALL POSSIBLE FRIENDS
app.get('/api/friends', function(req, res){ 
return res.JSON(friends);
})


// SURVEY RESULTS & COMPATABILITY LOGIC
app.post('/api/friends', function(req, res) {

  // req.body is equivalent to the JSON post sent from the user; this assignment works because of our body parsing middleware.
  var newFlowerlyFriend = req.body;
  // Using a RegEx Pattern to remove spaces from newFlowerlyFriend // Read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  // newFlowerlyFriend.name = newFlowerlyFriend.name.replace(/\s+/g, "").toLowerCase();

  // Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`)
  var userScores = newFlowerlyFriend.scores; 

  console.log(newFlowerlyFriend.scores);

  // friends.push(newFlowerlyFriend);

  // res.json(newFlowerlyFriend);
  
  var bestMatch = {
    commonName: "",
    latinName: "",
    characteristics: "",
    photo: ""
  };
  
  var intUserScores = userScores.map(function(item){
    return parseInt(item);
  })
  // var newFlowerlyFriend = {
  //   commonName: req.body.name,
  //   latinName: req.body.name,
  //   characteristics: req.body.characteristics,
  //   photo: req.body.photo,
  //   scores: intUserScores
  // }
  
  // friends.push(newFlowerlyFriend)
  // console.log ('Name: ' + userName);
  console.log ('User Scores: ' + userScores);
  var difference = 0
  var min_difference = 100
  for(var i = 0; i < friends.length; i++) {
    for(var j = 0; j < friends[i].scores.length; j++) {
      
      difference = difference + (Math.abs(intUserScores[j] - friends[i].scores[j]))
    }
    if(difference < min_difference) {
      min_difference = difference;
      bestMatch.commonName = friends[i].commonName;
      bestMatch.latinName = friends[i].latinName
      bestMatch.characteristics = friends[i].characteristics;
      bestMatch.photo = friends[i].photo;
    }
  } 


  
  // console.log('Sum of User Scores: ' + );
  console.log("Best Match Friends' Difference" + min_difference)

  res.json(bestMatch)
});

module.exports = app;