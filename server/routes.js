'use strict';

var config = require('./config/environment');
// var authController = require(config.resources.auth + '/authController');
// var errorHandler = require(config.resources.errors + '/errorHandler');

module.exports = function (app) {
  // app.use('/auth', require('./auth/authRoute'));

  // app.all('/api/*', authController.isAuthenticated);
  app.use('/api/patient', require('./api/routes/patientRoute'));
  app.use('/api/file', require('./api/routes/fileRoute'));

  // Tratamento dos erros
  // app.use(errorHandler);

  app.route('/*').get(function (req, res) {
    res.sendFile(app.get('appPath') + '/index.html');
  });
};
