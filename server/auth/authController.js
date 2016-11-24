'use strict';

var config = require('../config/environment');
var passport = require('passport');
var authService = require('./authService');

module.exports = (function () {

  var login = function(req, res, next) {
    console.log(req.params);
  };

  var redirect = function(user, req, res, next) {
  }
  
  return {
    login: login
  };

})();
