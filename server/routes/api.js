var express = require('express');
var router = express.Router();

var Character = require('../models/character');
Character.methods(['get', 'put', 'post', 'delete']);
Character.register(router, '/character');

module.exports = router;
