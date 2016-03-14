angular
 .module('home.dashboard')
 .controller('DashboardCtrl', ['$scope', 'users', DashboardCtrl]);

function DashboardCtrl($scope, users) {

	$scope.users = users.data;
	
}