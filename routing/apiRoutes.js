var friends = require('../app/data/friends');

module.exports = function(app) {
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.


app.get('/api/friends', function(req, res) {
   
    res.json(friends);
  
  });

// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

app.post('/api/friends', function(req, res) {
    
    friendsData = req.body;
  
 
   friendsData.routeName =friendsData.name.replace(/\s+/g, '').toLowerCase();
  
    console.log(friendsData);
  
//    friendsData.push(friendsData);
  
//     res.json(friendsData);
  });


}