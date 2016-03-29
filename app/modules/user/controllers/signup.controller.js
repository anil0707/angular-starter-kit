angular
 .module('user')
 .controller('SignupCtrl', ['$scope', '$state', 'UsersService', 'localStorageService', SignupCtrl]);

function SignupCtrl($scope, $state, UsersService, localStorageService) {

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
		.then(function (response) {
			$state.go('app.success', {}, { location: false } );
		})
		.catch(function (error) {
			$scope.err = error.data.message;
		});
	};
}