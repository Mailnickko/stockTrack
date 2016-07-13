var express = require('express');
var mongoose = require('mongoose');

var app = express();

require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

var uristring;

if (process.env.NODE_ENV === 'production') {
  uristring = 'mongodb://heroku_znj2r445:g3bmj3gqenjh9qsnf2bpjth9fl@ds029328.mlab.com:29328/heroku_znj2r445';
} else {
  uristring = 'mongodb://localhost/stockTrack';
}

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('connected to ' + port)
})

mongoose.connect(uristring, function (err, res) {
      if (err) {
      console.log ('ERROR connecting to: ' + uristring + '. ' + err);
      } else {
      console.log ('Succeeded connected to: ' + uristring);
      }
    });

module.exports = app;