var express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/playerScreen');

var server = express();
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use('/api', require('./routes/api'));

server.listen(3000);
console.log('server is running on 3000...');
