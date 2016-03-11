angular
 .module('login')
 .controller('LoginCtrl', ['$scope', '$state', 'AuthService', 'localStorageService', LoginCtrl]);

function LoginCtrl($scope, $state, AuthService, localStorageService) {

	if(localStorageService.get('authToken')){
		$state.go('dashboard');
	}

	$scope.login = function(){

		// check to make sure the form is completely valid
        if ($scope.frmLogin.$invalid) {
           	return;
        }

		AuthService.login($scope.user)
		.success(function (response) {

			localStorageService.set('authToken', response.authToken);

			$state.go('dashboard');
		})
		.error(function (error) {

			$scope.loginErr = error.message;
		});
 	};
}