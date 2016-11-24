app.run(['$rootScope', 'AuthService', 'RouteService', 
    function ($rootScope, AuthService, RouteService) {    

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        if(toParams && toParams.token) { 
            AuthService.createToken(toParams.token);
        }
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
    });

}]);