'use strict';

app.factory('AuthInterceptor', ['$rootScope', '$q', '$injector',
	function ($rootScope, $q, $injector) {        

	return {

        request: function(config) {        
    		var AuthService = $injector.get('AuthService');        
            config.headers = config.headers || {};
            if (AuthService.getToken()) {
                config.headers.Authorization = AuthService.getToken();
            }
          	return config;
        },

		responseError: function (rejection) {           
	      	if (rejection.status === 401) {
    			var AuthService = $injector.get('AuthService');
		        AuthService.createToken(null);
	        	$rootScope.goToLogin();
			}
			return $q.reject(rejection);
		}

	};

}]);

app.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
}]);