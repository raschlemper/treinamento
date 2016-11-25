app.run(['$rootScope', '$state', function ($rootScope, $state) {    

    $rootScope.goTo = function(state, params) {
        $state.go(state, params);
    };

    $rootScope.goToLogin = function() {
        $rootScope.goTo('auth.login', null, { reload: true });
    };

    $rootScope.goToIndex = function() {
        $rootScope.goTo('app.java.start', null, { reload: true });
    };

}]);