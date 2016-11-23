'use strict';

app.factory('AuthService', ['$http', '$localStorage', 'PromiseService', 
    function($http, $localStorage, PromiseService) {

    var adminUrl = 'https://ras-administration.herokuapp.com';

    return {

        login: function(email, password) {
            return PromiseService.execute(
                    $http.post(adminUrl + "/auth/local", 
                        { email: email, password: password }));
        },

        loginGoogle: function() {
            return PromiseService.execute(
                    $http.get(adminUrl + "/auth/google"));
        },

        isAuthenticated: function() {
            return PromiseService.execute(
                    $http.get(adminUrl + "/auth/authenticated"));
        },

        createToken: function(token) {
        	$localStorage.token = token;
        },

		getToken: function() {
        	return $localStorage.token;
        },

        createUser: function(user) {
        	$localStorage.user = user;
        },

		getUser: function() {
        	return $localStorage.user;
        }

    }

}]);