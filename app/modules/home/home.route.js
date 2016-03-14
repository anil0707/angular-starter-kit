angular
 .module('home')
 .config(['$stateProvider', homeStateProvider]);

 function homeStateProvider($stateProvider) {

	$stateProvider
		.state('home', {
			url : '/',
			views : {
				'@' : {
					controller : 'homeCtrl',
					templateUrl : 'app/modules/home/templates/menu.view.html'				
				}
			}
		});
}