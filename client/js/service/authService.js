'use strict';

app.factory('AuthService', ['$http', '$localStorage', 'PromiseService', 
    function($http, $localStorage, PromiseService) {

    var adminUrl = 'https://ras-administration.herokuapp.com';
    var system = '5836d5d41af5c70012d6d58e';

    return {

        isAuthenticated: function() {
            return PromiseService.execute(
                    $http.get(adminUrl + "/auth/authenticated/" + system));
        },

        getSystem: function() {
            return system;
        },

        getUser: function() {
            return PromiseService.execute(
                    $http.get(adminUrl + "/auth/token/user"));
        },

        createToken: function(token) {
            $localStorage.token = token;
        },

        getToken: function() {
            return $localStorage.token;
        }

    }

}]);