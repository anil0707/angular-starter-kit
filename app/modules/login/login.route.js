angular
 .module('login')
 .config(['$stateProvider', stateProvider]);

function stateProvider($stateProvider) {

	$stateProvider
		.state('app.login', {
			url : 'login',
			auth: false,
			views : {
				'container@app' : {
					controller : 'LoginCtrl',
					templateUrl : 'app/modules/login/templates/login.view.html'				
				}
			}
		})
		.state('app.forgot', {
			url : 'forgot',
			auth: false,
			views : {
				'container@app' : {
					controller : 'ForgotCtrl',
					templateUrl : 'app/modules/login/templates/forgot.view.html'				
				}
			}
		})
		.state('app.logout', {
			url : 'logout',
			views : {
				'container@app' : {
					controller : 'LogoutCtrl',
					templateUrl : ''				
				}
			}
		})
		.state('app.resetPassword', {
			url : 'resetpassword/{token}',
			auth: false,
			views : {
				'container@app' : {
					controller : 'ResetPassCtrl',
					templateUrl : 'app/modules/login/templates/resetPassword.view.html'		
				}
			}
		});
}