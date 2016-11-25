'use strict';

app.factory('AuthInterceptor', ['$rootScope', '$q',
	function ($rootScope, $q) {        

	return {

        request: function(config) {  
        	return config;
        },

		responseError: function (rejection) {   
			return $q.reject(rejection);
		}

	};

}]);

app.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
}]);