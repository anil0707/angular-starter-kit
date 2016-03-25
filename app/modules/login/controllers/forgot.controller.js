angular
 .module('login')
 .controller('ForgotCtrl', ['$scope', 'AuthService', ForgotCtrl])
 .controller('ResetPassCtrl', ['$scope', '$state', '$stateParams', 'UsersService', 'AuthService', ResetPassCtrl]);

function ForgotCtrl($scope, AuthService) {

	$scope.sendPasswordResetMail = function(){

		AuthService.sendPasswordResetMail($scope.email)
		.success(function (response) {
			$scope.success = true;
		})
		.error(function (error) {
			$scope.error = error.message;
		});
	};
}

function ResetPassCtrl($scope, $state, $stateParams, UsersService, AuthService) {

	$scope.token = $stateParams.token;

	$scope.resetPassword = function(){

		AuthService.resetPassword($scope)
		.success(function (response) {
			$scope.success = true;
		})
		.error(function (error) {
			$scope.error = error.message;
		});
	};
}