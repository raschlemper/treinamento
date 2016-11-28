app.run(['$rootScope', '$state', '$location', '$localStorage', 'AuthService', 'RouteService', 
    function ($rootScope, $state, $location, $localStorage, AuthService, RouteService) {    

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        // console.log(toState, toParams);
        // event.preventDefault(); 
        setToken(event, toState, toParams);
        removeToken(event, toState, toParams);
        authenticated(event, toState, toParams);
    });

    var setToken = function(event, toState, toParams) {
        var token = $location.search().token || AuthService.getToken();
        if (token) {
            delete $localStorage.token;
            AuthService.createToken(token);
        }
    };

    var removeToken = function(event, toState, toParams) {  
        $location.search('token', null);
    };

    var authenticated = function(event, toState, toParams) {
        if(!RouteService.isPublic(toState.name)) {
            AuthService.isAuthenticated(AuthService.getToken())
                .then(function(data) {
                    $rootScope.user = data;
                    $rootScope.goTo(toState, toParams); 
                })
                .catch(function(e) { 
                    // event.preventDefault();
                    $rootScope.goToLogin();     
                    // $state.go('auth.login');              
                });
        } 
    }

}]);