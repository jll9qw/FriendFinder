
// var path = require('path');
// A GET Route to /survey which should display the survey page.

module.exports = function(app) {







// A default, catch-all route that leads to home.html which displays the home page.

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });
};