app.run(['$rootScope', '$state', function ($rootScope, $state) {    

    $rootScope.goTo = function(state, params, options) {
        $state.go(state, params, options);
    };

    $rootScope.goToLogin = function(event) {
    	  if(event) { event.preventDefault(); }
        $rootScope.goTo('auth.login', null, { reload: true });
    };

    $rootScope.goToIndex = function(event) {
    	  if(event) { event.preventDefault(); }
        $rootScope.goTo('app.java.start', null, { reload: true });
    };

}]);