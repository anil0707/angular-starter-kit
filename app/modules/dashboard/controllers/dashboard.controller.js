angular
 .module('dashboard')
 .controller('DashboardCtrl', ['$scope', 'users', DashboardCtrl]);

function DashboardCtrl($scope, users) {

	//var users = UsersService.getUserDetails();

	console.log(users);
	
}