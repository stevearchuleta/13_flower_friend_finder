
// Ask Sunny if require('../data.friends.js') is necessary here.
// var friends = require('../data.friends.js');

var express = require("express");
var app = express.Router();

// DISPLAY A JSON OF ALL POSSIBLE FRIENDS
app.get('/api/friends', function(req, res){ 
return res.JSON(friends);
})


// SURVEY RESULTS & COMPATABILITY LOGIC
app.post('/api/friends', function(req, res) {
  // req.body is equivalent to the JSON post sent from the user; this assignment works because of our body parsing middleware.
  var newFlowerlyFriend = req.body;
  // Using a RegEx Pattern to remove spaces from newFlowerlyFriend // Read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newFlowerlyFriend.name = newFlowerlyFriend.name.replace(/\s+/g, "").toLowerCase();

  // Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`)
  var userScores = newFloweryFriends.scores; 

  console.log(newFlowerlyFriend.scores);

  friends.push(newFlowerlyFriend);

  res.json(newFlowerlyFriend);
});

module.exports = app;


// var totalDifference = 0;
// var bestMatch = {
//   name: "",
//   photo: "",
//   friendDifference: 1000
// };

// Ask Sunny if I need this:
// var b = userScores.map(function(item){
//   return parseInt(item, 10);
// })