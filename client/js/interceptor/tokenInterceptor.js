'use strict';

app.factory('TokenInterceptor', ['$rootScope', '$q', '$localStorage', '$injector', 
  function ($rootScope, $q, $localStorage, $injector) {

    var error = function(rejection) {
      var AuthService = $injector.get('AuthService');  
      if (rejection.status === 401) {
        AuthService.createToken(null);
        $rootScope.goToLogin();
      }
      return $q.reject(rejection);
    }
  
  return {

    request: function (config) {     
      var AuthService = $injector.get('AuthService'); 
      if (AuthService.getToken()) {
        config.headers.Authorization = AuthService.getToken();
      }
      return config;
    },

    response: function (rejection) {           
      error(rejection);
    },

    responseError: function (rejection) {        
      error(rejection);
		}

  };

}]);

app.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('TokenInterceptor');
}]);