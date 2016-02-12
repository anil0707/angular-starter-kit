'use strict';

angular
 .module('login')
 .controller('SignupCtrl', ['$scope', SignupCtrl]);

function SignupCtrl($scope) {
	$scope.message = "Welcome to awesome Signup page..";
}