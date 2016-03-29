angular
 .module('login')
 .controller('ForgotCtrl', ['$scope', 'AuthService', ForgotCtrl])
 .controller('ResetPassCtrl', ['$scope', '$state', '$stateParams', 'UsersService', 'AuthService', ResetPassCtrl]);

function ForgotCtrl($scope, AuthService) {

	$scope.sendPasswordResetMail = function(){

		AuthService.sendPasswordResetMail($scope.email)
		.then(function (response) {
			$scope.success = true;
		})
		.catch(function (error) {
			$scope.error = error.data.message;
		});
	};
}

function ResetPassCtrl($scope, $state, $stateParams, UsersService, AuthService) {

	$scope.token = $stateParams.token;

	$scope.resetPassword = function(){

		AuthService.resetPassword($scope)
		.then(function (response) {
			$scope.success = true;
		})
		.catch(function (error) {
			$scope.error = error.data.message;
		});
	};
}