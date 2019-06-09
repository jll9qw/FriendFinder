var friends = require('../app/data/friends');

module.exports = function(app) {
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.


app.get('/api/friends', function(req, res) {
    friendsData = req.body;
    console.log(friendsData);
  
  });

// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

app.post('/api/friends', function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    friendsData = req.body;
  
 
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
   friendsData.routeName =friendsData.name.replace(/\s+/g, '').toLowerCase();
  
    console.log(friendsData);
  
//    friendsData.push(friendsData);
  
//     res.json(friendsData);
  });


}