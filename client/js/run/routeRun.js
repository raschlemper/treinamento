app.run(['$rootScope', '$state', function ($rootScope, $state) {    

    $rootScope.goTo = function(state, params) {
        $state.go(state, params);
    };

    $rootScope.goToLogin = function() {
        $rootScope.goTo('auth.login');
    };

    $rootScope.goToIndex = function() {
        $rootScope.goTo('app.java.start');
    };

}]);