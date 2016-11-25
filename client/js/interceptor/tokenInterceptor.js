'use strict';

app.factory('TokenInterceptor', ['$rootScope', '$localStorage', '$injector', 
  function ($rootScope, $localStorage, $injector) {
  
  return {

    request: function (config) {     
      var AuthService = $injector.get('AuthService'); 
      if (AuthService.getToken()) {
        config.headers.Authorization = AuthService.getToken();
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

app.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('TokenInterceptor');
}]);