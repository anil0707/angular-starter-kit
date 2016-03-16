angular
 .module('dashboard')
 .config(['$stateProvider', dashboardStateProvider]);

 function dashboardStateProvider($stateProvider) {

	$stateProvider
		.state('home.dashboard', {
			url : 'dashboard',
			controller : 'DashboardCtrl',
			templateUrl : 'app/modules/dashboard/templates/dashboard.view.html'
		});
}