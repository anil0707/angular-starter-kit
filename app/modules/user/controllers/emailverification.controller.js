angular
 .module('user')
 .controller('EmailVerificationCtrl', ['$scope', '$state', '$stateParams', 'UsersService', 'AuthService', EmailVerificationCtrl]);

function EmailVerificationCtrl($scope, $state, $stateParams, UsersService, AuthService) {

	$scope.success = false;

	UsersService.verifyEmail($stateParams)
		.then(function(){
			$scope.success = true;
		})
		.catch(function(err){
			$scope.success = false;
		});

	$scope.sendEmailVerificationMail = function(){

		AuthService.sendVerificationMail($scope.email)
		.success(function (response) {
			$state.go('app.success', {}, { location: false } );
		})
		.error(function (error) {
			$scope.err = error.message;
		});
	};
}