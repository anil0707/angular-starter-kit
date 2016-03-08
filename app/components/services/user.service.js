angular
	.module('services')
	.factory('UsersService', UsersService);

function UsersService($http) {

	function getUserDetails() {

		return $http({
			method: 'GET',
			url: 'http://localhost:8000/users'
		});
    }

    function add(payload) {

		return $http({
			method: 'POST',
			url: 'http://localhost:8000/add',
			data: payload
		});
    }

    return {
      getUserDetails: getUserDetails,
      add: add
	};
}