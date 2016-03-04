angular
 .module('login')
 .controller('LoginCtrl', ['$scope', '$http', '$state', LoginCtrl]);

function LoginCtrl($scope, $http, $state) {

	$scope.login = function(){
		$http({
            method: 'POST',
            url: 'http://localhost:8000/login',
            data: $scope.user
		})
		.then(function(response) {
			
			$state.go('dashboard');
		});
	};
}