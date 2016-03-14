angular
 .module('home.dashboard')
 .config(['$stateProvider', dashboardStateProvider]);

 function dashboardStateProvider($stateProvider, UsersService) {

	$stateProvider
		.state('home.dashboard', {
			url : '/dashboard',
			views : {
				'@' : {
					controller : 'DashboardCtrl',
					templateUrl : 'app/modules/dashboard/templates/dashboard.view.html'		  				
				}
			},
			resolve: {
				users : function(UsersService) {
					return UsersService.getUserDetails();
				}
			}
		});
}