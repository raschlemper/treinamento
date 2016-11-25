app.run(['$rootScope', 'AuthService', 'RouteService', 
    function ($rootScope, AuthService, RouteService) {    

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        console.log(toState, toParams);
        setToken(toState, toParams);
        hasToken(toState, toParams);
        authenticated(toState, toParams);
    });

    var setToken = function(event, toState, toParams) {
        if(toParams && toParams.token) { 
            AuthService.createToken(toParams.token);
        }
    };

    var hasToken = function(event, toState, toParams) {
        if(toState && toState.name === "auth.token") { 
            $rootScope.goToIndex(event); 
        }
    };

    var authenticated = function(event, toState, toParams) {
        if(!RouteService.isPublic(toState.name)) {
            AuthService.isAuthenticated(AuthService.getToken())
                .then(function(data) {
                    $rootScope.user = AuthService.getUser();
                    $rootScope.goTo(toState, toParams); 
                })
                .catch(function(e) { 
                    $rootScope.goToLogin(event);                   
                });
        }        
    }

}]);