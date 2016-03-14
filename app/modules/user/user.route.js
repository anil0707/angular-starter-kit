angular
 .module('user')
 .config(['$stateProvider', userStateProvider]);

function userStateProvider($stateProvider) {

	$stateProvider
		.state('home.add', {
			url : 'add',
			controller : 'SignupCtrl',
			templateUrl : 'app/modules/user/templates/signup.view.html'
		});
}