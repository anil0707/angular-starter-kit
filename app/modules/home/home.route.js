angular
 .module('home')
 .config(['$stateProvider', homeStateProvider]);

 function homeStateProvider($stateProvider) {

	$stateProvider
		.state('app', {
			url : '/',
			views : {
				'nav': { templateUrl: 'app/modules/home/templates/menu.view.html' }
			}
		});
}