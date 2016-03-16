angular
 .module('user')
 .config(['$stateProvider', userStateProvider]);

function userStateProvider($stateProvider, UsersService) {

	$stateProvider
		.state('home.add', {
			url : 'add',
			controller : 'SignupCtrl',
			templateUrl : 'app/modules/user/templates/signup.view.html',
			auth: false
		})
		.state('home.users', {
			url : 'users',
			controller : 'UsersCtrl',
			templateUrl : 'app/modules/user/templates/users.view.html',
			resolve: {
				users : function(UsersService) {
					return UsersService.getUserDetails();
				}
			}
		});
}