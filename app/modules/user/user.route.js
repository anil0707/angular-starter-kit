angular
 .module('home.user')
 .config(['$stateProvider', userStateProvider]);

function userStateProvider($stateProvider) {

	$stateProvider
		.state('home.add', {
			url : '/add',
			views : {
				'@' : {
					controller : 'SignupCtrl',
					templateUrl : 'app/modules/user/templates/signup.view.html'				
				}
			}  
		});
}