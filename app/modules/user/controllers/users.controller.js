angular
 .module('user')
 .controller('UsersCtrl', ['$scope', 'users', UsersCtrl]);

function UsersCtrl($scope, users) {

	$scope.users = users.data;
	
}