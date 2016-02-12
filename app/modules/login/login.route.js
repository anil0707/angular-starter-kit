'use strict';

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
		.state('signup', {
			url : '/signup',
			views : {
				'@' : {
					controller : 'SignupCtrl',
					templateUrl : 'app/modules/login/templates/signup.view.html'		  				
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
		});
}