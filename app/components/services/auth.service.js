angular
	.module('services')
	.factory('AuthService', AuthService);

function AuthService($http, $location, localStorageService, $state) {

    function login(credentials) {

		return $http({
			method: 'POST',
			url: 'http://localhost:8000/login',
			data: credentials
		});
    }

    return {
      login: login
	};
}