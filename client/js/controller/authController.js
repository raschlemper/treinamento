'use strict';

app.controller('AuthController', ['$rootScope', '$scope', '$state', 'AuthService',
  function ($rootScope, $scope, $state, AuthService) {

	var init = function () {
	};

	$scope.login = function(username, password) {
		AuthService.login(username, password)
			.then(function(data) {
				if (!data.token) return;
				AuthService.createToken(data.token);
               	AuthService.createUser(data.profile);              	
	        	$rootScope.goToIndex();         
			})
          	.catch(function(e) {
          		console.log(e);
			});
	};

  	init();

}]);