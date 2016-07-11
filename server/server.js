var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/stockTrack');

require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

var port = process.env.PORT || 3000;

app.listen(3000);

app.listen(port, function() {
  console.log('connected!')
})

module.exports = app;