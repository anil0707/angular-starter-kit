angular
 .module('user')
 .config(['$stateProvider', userStateProvider]);

function userStateProvider($stateProvider) {

	$stateProvider
		.state('add', {
			url : '/add',
			views : {
				'@' : {
					controller : 'SignupCtrl',
					templateUrl : 'app/modules/user/templates/signup.view.html'				
				}
			}  
		});
}