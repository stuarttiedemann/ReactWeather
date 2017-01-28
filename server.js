var express = require('express');

// Create our app 
var app = express();

// Tell which folder to serve 
app.use(express.static('public'));

// Start the server 
app.listen(3000, function() {
  console.log('Express server is running on port 3000');
});