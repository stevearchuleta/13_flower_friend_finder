
// DISPLAY A JSON OF ALL POSSIBLE FRIENDS
app.get('/api/friends', function(req, res){
  
  
return res.jason(friends);
})





// SURVEY RESULTS & COMPATABILITY LOGIC
app.post('/api/friends', function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newFlowerlyFriend = req.body;

  // Using a RegEx Pattern to remove spaces from newFlowerlyFriend
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();




  
  console.log(newFlowerlyFriend);

  friends.push(newFlowerlyFriend);

  res.json(newFlowerlyFriend);
});