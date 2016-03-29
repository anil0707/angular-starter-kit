angular
 .module('login')
 .controller('LoginCtrl', ['$scope' ,'$rootScope', '$state', 'AuthService', 'localStorageService', LoginCtrl]);

function LoginCtrl($scope, $rootScope, $state, AuthService, localStorageService) {

	$scope.login = function(){

		// check to make sure the form is completely valid
        if ($scope.frmLogin.$invalid) {
           	return;
        }

		AuthService.login($scope.user)
		.then(function (response) {

			localStorageService.set('authToken', response.data.authToken);

			$state.go('app.dashboard');
		})
		.catch(function (error) {

			$scope.loginErr = error.data.message;
		});
 	};
}