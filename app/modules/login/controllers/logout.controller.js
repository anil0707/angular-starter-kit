angular
 .module('login')
 .controller('LogoutCtrl', ['$scope', '$rootScope', '$state', 'localStorageService', LogoutCtrl]);

function LogoutCtrl($scope, $rootScope, $state, localStorageService) {

	localStorageService.remove('authToken');

	$state.go('home.login');
}        	