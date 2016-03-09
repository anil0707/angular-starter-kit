angular
 .module('login')
 .controller('LogoutCtrl', ['$scope', '$state', 'localStorageService', LogoutCtrl]);

function LogoutCtrl($scope, $state, localStorageService) {

	localStorageService.remove('authToken');
	window.location = '/login';
}        	