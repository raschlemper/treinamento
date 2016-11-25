'use strict';

app.controller('AuthController', ['$rootScope', '$scope', '$state', '$stateParams', '$location', 'AuthService',
  function ($rootScope, $scope, $state, $stateParams, $location, AuthService) {

	var init = function () {
	};

	$scope.getUrl = function(strategy) {
		var url  = 'https://ras-administration.herokuapp.com/auth/login/';
		    url += strategy + '/';
		    url += '5836d5d41af5c70012d6d58e';
		    url += '?target=' + getTarget();
	};


	var getTarget = function() {
		$scope.target = $location.protocol() + '://' + $location.host();
	};

  	init();

}]);