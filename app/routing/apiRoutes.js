var friends = require('../data/friends');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
app.get('/api/friends', function(req, res) { 
    res.json(friends);
  });




// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
app.post('/api/friends', function(req, res) {
    
   var newfriendData = req.body;
  
   let match = {
    name: "",
    pic: "",
    friendDifference: Infinity
  };

  var totalDifference;
  

  for (let i = 0; i < friends.length; i++) {
    var currentFriend = friends[i];
    totalDifference = 0;

  

    for (let j = 0; j < currentFriend.score.length; j++) {
      

      totalDifference += Math.abs(newfriendData.score[j] - parseInt(currentFriend.score[j]));
    };
    if (totalDifference <= bestMatch.friendDifference) {
      // Reset the bestMatch to be the new friend.
      match.name = currentFriend.name;
      match.pic = currentFriend.pic;
      match.friendDifference = totalDifference;
    }
  }

  friends.push(newfriendData);
  res.json(match);



})
}