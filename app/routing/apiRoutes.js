var friends = require('../data/friends');

module.exports = function(app) {
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
app.get('/api/friends', function(req, res) { 
    res.json(friends);
  });




// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
app.post('/api/friends', function(req, res) {
    
   var newfriendData = req.body;

  
  var match ={
    index: 0,
    least_difference: 0
  };

  for (let i = 0; i < friends.length; i++) {
    const element = friends[i];
    

    var difference = 0;

    for (let j = 0; j < element.scores.length; j++) {
      const element = scores[j];
      
      difference += Math.abs(newfriendData.scores[j] - parseInt(score));
    };
    if (i === 0) {
      match.index = i;
      match.least_difference = difference;
    } else if (difference < match.least_difference) {
      match.index = i;
      match.least_difference = difference;
    } else return;


  best_match = friends[match.index];
  friends.push(newfriendData);
  res.json(best_match)



  };

})
}