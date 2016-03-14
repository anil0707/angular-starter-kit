angular
 .module('login')
 .config(['$stateProvider', stateProvider]);

function stateProvider($stateProvider) {

	$stateProvider
		.state('home.login', {
			url : 'login',
			controller : 'LoginCtrl',
			templateUrl : 'app/modules/login/templates/login.view.html'
		})
		.state('home.forgot', {
			url : '/forgot',
			controller : 'ForgotCtrl',
			templateUrl : 'app/modules/login/templates/forgot.view.html'
		})
		.state('home.logout', {
			url : '/logout',
			controller : 'LogoutCtrl'
		});
}