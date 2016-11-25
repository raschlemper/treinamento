app.run(['$rootScope', '$state', function ($rootScope, $state) {    

    $rootScope.goTo = function(state, params, options) {
        $state.go(state, params, options);
    };

    $rootScope.goToLogin = function(event) {
    	  // if(event) { event.preventDefault(); }
        $rootScope.goTo('auth.login', null, null);
    };

    $rootScope.goToIndex = function(event) {
    	  // if(event) { event.preventDefault(); }
        $rootScope.goTo('app.java.start', null, null);
    };

}]);