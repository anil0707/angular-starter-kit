'use strict';

angular
 .module('login')
 .controller('LoginCtrl', ['$scope', LoginCtrl]);

function LoginCtrl($scope) {
	$scope.message = "Welcome to awesome login page..";
}