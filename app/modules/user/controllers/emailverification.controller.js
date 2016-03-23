angular
 .module('user')
 .controller('EmailVerificationCtrl', ['$scope', '$stateParams', 'UsersService', 'AuthService', EmailVerificationCtrl]);

function EmailVerificationCtrl($scope, $stateParams, UsersService, AuthService) {

	$scope.success = true;
	// UsersService.verifyToken($stateParams)
	// 	.then(function(){
	// 		$scope.success = true;
	// 	})
	// 	.catch(function(err){
	// 		$scope.success = false;
	// 	});

	$scope.sendEmailVerificationMail = function(){

		console.log($scope);

		AuthService.sendVerificationMail($scope.email)
		.success(function (response) {
			$state.go('app.success', {}, { location: false } );
		})
		.error(function (error) {
			$scope.err = error.message;
		});
	};
}