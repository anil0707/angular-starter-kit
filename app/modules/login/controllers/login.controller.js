angular
 .module('login')
 .controller('LoginCtrl', ['$scope', '$state', 'AuthService', LoginCtrl]);

function LoginCtrl($scope, $state, AuthService) {

	$scope.login = function(){

		AuthService.login($scope.user)
		.success(function (response) {
			$state.go('dashboard');
		})
		.error(function (error) {
			$scope.loginErr = error.message;
		});
	 };
}