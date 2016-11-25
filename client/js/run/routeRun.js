app.run(['$rootScope', '$state', function ($rootScope, $state) {    

    $rootScope.goTo = function(state, params) {
        $state.go(state, params);
    };

    $rootScope.goToLogin = function(event) {
    	  // if(event) { event.preventDefault(); }
        $rootScope.goTo('auth.login', null);
    };

    $rootScope.goToIndex = function() {
        $rootScope.goTo('app.main', null);
    };

}]);