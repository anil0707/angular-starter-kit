angular
 .module('login')
 .controller('LoginCtrl', ['$scope', '$state', 'AuthService', LoginCtrl]);

function LoginCtrl($scope, $state, AuthService) {

	$scope.login = function(){

		// check to make sure the form is completely valid
        if ($scope.frmLogin.$invalid) {
           	return;
        }

		AuthService.login($scope.user)
		.success(function (response) {
			$state.go('dashboard');
		})
		.error(function (error) {
			$scope.loginErr = error.message;
		});
	 };
}