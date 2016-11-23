'use strict';

app.controller('AuthController', ['$rootScope', '$scope', '$state', 'AuthService',
  function ($rootScope, $scope, $state, AuthService) {

	var init = function () {
	};

	$scope.login = function(username, password) {
		AuthService.login(username, password)
			.then(function(data) {
				setReturn(data);        
			})
          	.catch(function(e) {
          		console.log(e);
			});
	};

	$scope.loginGoogle = function() {
		AuthService.loginGoogle()
			.then(function(data) {
				setReturn(data);
			})
          	.catch(function(e) {
          		console.log(e);
			});
	};

	var setReturn = function(data) {
		if (!data.token) return;
		AuthService.createToken(data.token);
       	AuthService.createUser(data.profile);              	
    	$rootScope.goToIndex(); 
	};

  	init();

}]);