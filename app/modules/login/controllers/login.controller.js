angular
 .module('login')
 .controller('LoginCtrl', ['$scope', '$state', 'AuthService', 'localStorageService', LoginCtrl]);

function LoginCtrl($scope, $state, AuthService, localStorageService) {

	$scope.login = function(){

		// check to make sure the form is completely valid
        if ($scope.frmLogin.$invalid) {
           	return;
        }

		AuthService.login($scope.user)
		.success(function (response) {
			localStorageService.set('authToken', response.authToken);

			//Remove on logout
			//localStorageService.remove(key);
			$state.go('dashboard');
		})
		.error(function (error) {
			$scope.loginErr = error.message;
		});
	 };
}