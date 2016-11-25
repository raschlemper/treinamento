app.run(['$rootScope', 'AuthService', 'RouteService', 
    function ($rootScope, AuthService, RouteService) {    

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        console.log(toState, toParams);
        setToken(toState, toParams);
        hasToken(toState, toParams);
        authenticated(toState, toParams);
    });

    var setToken = function(toState, toParams) {
        if(toParams && toParams.token) { 
            AuthService.createToken(toParams.token);
        }
    };

    var hasToken = function(toState, toParams) {
        if(toState && toState.name = "app.token") { 
            $rootScope.goToIndex(); 
        }
    };

    var authenticated = function(toState, toParams) {
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