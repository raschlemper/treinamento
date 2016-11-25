'use strict';

app.factory('TokenInterceptor', ['$rootScope', '$localStorage', '$location', '$injector', 
  function ($rootScope, $localStorage, $location, $injector) {
  
  return {

    request: function (config) {
      var AuthService = $injector.get('AuthService');      
      var token = $location.search().token || AuthService.getToken();
      if (token) {
        delete $localStorage.token;
        $location.search('token', undefined);
        AuthService.createToken(token);
        config.headers.Authorization = token;
      }
      return config;
    },

    response: function (rejection) {        
      var AuthService = $injector.get('AuthService');  
      if (rejection.status === 401) {
        AuthService.createToken(undefined);
        $rootScope.goToLogin();
      }
      return $q.reject(rejection);
		}

  };

}]);