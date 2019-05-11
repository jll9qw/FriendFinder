// Dependencies 
const express = require("express");
const path = require('path'); 
const app = express();




const PORT = process.env.PORT || 3000;


// Allows data to be sent to server as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
  });
// $('#myModal').on('hidden.bs.modal', function (e) {
//     if (!data) return e.preventDefault() // stops modal from being shown
//   })