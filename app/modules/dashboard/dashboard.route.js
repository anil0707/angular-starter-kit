angular
 .module('dashboard')
 .config(['$stateProvider', dashboardStateProvider]);

 function dashboardStateProvider($stateProvider) {

	$stateProvider
		.state('app.dashboard', {
			url : 'dashboard',
			views : {
				'container@app' : {
					controller : 'DashboardCtrl',
					templateUrl : 'app/modules/dashboard/templates/dashboard.view.html'
				}
			}
		});
}