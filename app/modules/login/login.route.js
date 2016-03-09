angular
 .module('login')
 .config(['$stateProvider', stateProvider]);

function stateProvider($stateProvider) {

	$stateProvider
		.state('login', {
			url : '/login',
			views : {
				'@' : {
					controller : 'LoginCtrl',
					templateUrl : 'app/modules/login/templates/login.view.html'		  				
				}
			}  
		})
		.state('forgot', {
			url : '/forgot',
			views : {
				'@' : {
					controller : 'ForgotCtrl',
					templateUrl : 'app/modules/login/templates/forgot.view.html'		  				
				}
			}  
		})
		.state('logout', {
			url : '/logout',
			views : {
				'@' : {
					controller : 'LogoutCtrl',
					template : ''	  				
				}
			}
		});
}