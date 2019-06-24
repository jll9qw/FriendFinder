const friends = require('../data/friends');


// ROUTING

module.exports = function(app) {
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
app.get('/api/friends', function(req, res) { 
    res.json(friends);
  });




// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
app.post('/api/friends', function(req, res) {

  let bestMatch = {
    name: "",
    pic: "",
    friendDifference: Infinity
  };

  
  
   let newfriendData = req.body;
   let newfriendScore = newfriendData.score
   let totalDifference;
  
   

  for (let i = 0; i < friends.length; i++) {
    let currentFriend = friends[i];
    totalDifference = 0;

  

    for (let j = 0; j < currentFriend.score.length; j++) {
      
      let currentFriendScore = currentFriend.score[j];
      let currentUserScore = newfriendScore[j];

      totalDifference += Math.abs(parseInt(currentUserScore)- parseInt(currentFriendScore));
    };
    if (totalDifference <= bestMatch.friendDifference) {
      // Reset the bestMatch to be the new friend.
      bestMatch.name = currentFriend.name;
      bestMatch.pic = currentFriend.pic;
      bestMatch.friendDifference = totalDifference;
    }
  }

  friends.push(newfriendData);
  res.json(bestMatch);



})
};