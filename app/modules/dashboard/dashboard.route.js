angular
 .module('dashboard')
 .config(['$stateProvider', dashboardStateProvider]);

 function dashboardStateProvider($stateProvider, UsersService) {

	$stateProvider
		.state('dashboard', {
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