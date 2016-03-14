angular
 .module('user')
 .controller('SignupCtrl', ['$scope', '$state', 'UsersService', 'localStorageService', SignupCtrl]);

function SignupCtrl($scope, $state, UsersService, localStorageService) {

	if(localStorageService.get('authToken')){
		$state.go('home.dashboard');
	}

	$scope.add = function(){

		var payload = {
			"name" : {
				"firstname" : $scope.firstname,
				"lastname" : $scope.lastname
			},
			"email" : $scope.email,
			"password" : $scope.password,
			"scope": [$scope.role]
		};

		UsersService.add(payload)
		.success(function (response) {
			$state.go('home.dashboard');
		})
		.error(function (error) {
			$scope.err = error.message;
		});
	};
}