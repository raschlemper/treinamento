'use strict';

app.controller('AuthController', ['$rootScope', '$scope', '$state', '$stateParams', 'AuthService',
  function ($rootScope, $scope, $state, $stateParams, AuthService) {

	var init = function () {
		if($stateParams.strategy == 'google') {
			loginGoogle();
		}
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

	var loginGoogle = function() {
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