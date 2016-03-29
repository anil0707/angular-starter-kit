angular
	.module('services')
	.factory('UsersService', UsersService);

function UsersService($http, config) {

	function getUserDetails() {

		return $http({
			method: 'GET',
			url: config.apiUrl+'users'
		});
    }

    function add(payload) {

		return $http({
			method: 'POST',
			url: config.apiUrl+'add',
			data: payload
		});
    }

    function verifyEmail(params) {

    	return $http({
    		method: 'GET',
    		url: config.apiUrl+'verifyemail',
    		headers: {'Authorization': 'Bearer '+ params.token }
		});
    }

    return {
      getUserDetails: getUserDetails,
      add: add,
      verifyEmail: verifyEmail
	};
}