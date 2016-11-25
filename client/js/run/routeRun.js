app.run(['$rootScope', '$state', function ($rootScope, $state) {    

    $rootScope.goTo = function(state, params, options) {
        $state.go(state, params, options);
    };

    $rootScope.goToLogin = function() {
        $rootScope.goTo('auth.login', null, { reload: true });
    };

    $rootScope.goToIndex = function() {
        $rootScope.goTo('app.main', null, { reload: true });
    };

}]);