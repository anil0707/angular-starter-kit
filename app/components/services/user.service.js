angular
	.module('services')
	.factory('UsersService', UsersService);

function UsersService($http) {

	function getUserDetails() {

		return $http({
			method: 'GET',
			url: 'http://localhost:8000/users',
			cache: true
		});
    }
    
    return {
      getUserDetails: getUserDetails
	};
}