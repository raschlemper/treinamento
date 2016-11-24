'use strict';

var express = require('express');
var config = require('../config/environment');
var router = express.Router();
var controller = require('./authController');

router.get('/token/:token', controller.token, controller.redirect);

module.exports = router;