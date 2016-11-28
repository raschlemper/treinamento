'use strict';

app.controller('AuthController', ['$rootScope', '$scope', '$state', '$stateParams', '$location', '$sce', 'AuthService',
  function ($rootScope, $scope, $state, $stateParams, $location, $sce, AuthService) {

	var init = function () {
		$scope.actions = {};
		$scope.actions.local = getUrl('local');
		$scope.actions.google = getUrl('google');
	};

	var getUrl = function(strategy) {
		var url  = 'https://ras-administration.herokuapp.com/auth/login/';
		    url += strategy + '/';
		    url += '5836d5d41af5c70012d6d58e';
		    url += '?target=' + getTarget();
		return $sce.trustAsResourceUrl(url);
	};

	var getTarget = function() {
		return $location.protocol() + '://' + $location.host() + ':' + $location.port();
	};

  	init();

}]);