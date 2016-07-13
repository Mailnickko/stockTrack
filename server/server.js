var express = require('express');
var mongoose = require('mongoose');

var app = express();

require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

var uristring =
    'mongodb://heroku_hpg01p4n:u0e34oumotdd1mjq5urrjd43j1@ds017205.mlab.com:17205/heroku_hpg01p4n' ||
    'mongodb://localhost/stockTrack';

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('connected!')
})

mongoose.connect(uristring, function (err, res) {
      if (err) {
      console.log ('ERROR connecting to: ' + uristring + '. ' + err);
      } else {
      console.log ('Succeeded connected to: ' + uristring);
      }
    });

module.exports = app;