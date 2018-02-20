var express = require('express');
var router = express.Router();

var register = require('../common/register');
var Character = require('../models/character');

register(Character, router, 'character');

module.exports = router;
