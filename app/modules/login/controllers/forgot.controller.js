'use strict';

angular
 .module('login')
 .controller('ForgotCtrl', ['$scope', ForgotCtrl]);

function ForgotCtrl($scope) {
	$scope.message = "Welcome to awesome Forgot password page..";
}