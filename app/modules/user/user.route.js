angular
 .module('user')
 .config(['$stateProvider', userStateProvider]);

function userStateProvider($stateProvider, UsersService) {

	$stateProvider
		.state('app.add', {
			url : 'add',
			auth: false,
			views : {
				'container@app' : {
					controller : 'SignupCtrl',
					templateUrl : 'app/modules/user/templates/signup.view.html'		
				}
			}
		})
		.state('app.users', {
			url : 'users',
			views : {
				'container@app' : {
					controller : 'UsersCtrl',
					templateUrl : 'app/modules/user/templates/users.view.html'
				}
			},
			resolve: {
				users : function(UsersService) {
					return UsersService.getUserDetails();
				}
			}
		});
}