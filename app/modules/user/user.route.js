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
		})
		.state('app.success', {
			url : 'addsuccess',
			auth: false,
			views : {
				'container@app' : {
					templateUrl : 'app/modules/user/templates/registrationSuccess.view.html'
				}
			}
		})
		.state('app.verifyEmail', {
			url : 'emailverify/{token}',
			auth: false,
			views : {
				'container@app' : {
					controller : 'EmailVerificationCtrl',
					templateUrl : 'app/modules/user/templates/emailVerify.view.html'		
				}
			}
		});
}