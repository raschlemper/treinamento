app.run(['$rootScope', '$location', 'AuthService', 'RouteService', 
    function ($rootScope, $location, AuthService, RouteService) {    

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        console.log(toState, toParams);
        event.preventDefault(); 
        setToken(event, toState, toParams);
        removeToken(event, toState, toParams);
        authenticated(event, toState, toParams);
    });

    var setToken = function(event, toState, toParams) {
        var token = $location.search().token || AuthService.getToken();
        if (token) {
            delete $localStorage.token;
            AuthService.createToken(toParams.token);
        }
    };

    var removeToken = function(event, toState, toParams) {  
        $location.search('token', undefined);
    };

    var authenticated = function(event, toState, toParams) {
        if(!RouteService.isPublic(toState.name)) {
            AuthService.isAuthenticated(AuthService.getToken())
                .then(function(data) {
                    $rootScope.user = AuthService.getUser();
                    $rootScope.goTo(toState, toParams); 
                })
                .catch(function(e) { 
                    event.preventDefault();
                    $rootScope.goToLogin();                   
                });
        }        
    }

}]);