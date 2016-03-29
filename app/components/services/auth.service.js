angular
	.module('services')
	.factory('AuthService', AuthService);

function AuthService($http, $location, localStorageService, $state, config) {

    function login(credentials) {

		return $http({
			method: 'POST',
			url: config.apiUrl+'login',
			data: credentials
		});
    }

    function sendVerificationMail(email) {
    	return $http({
    		method: 'POST',
    		url: config.apiUrl+'sendEmailVerificationMail',
    		data: {'email': email}
    	});
    }

    function sendPasswordResetMail(email) {
        return $http({
            method: 'POST',
            url: config.apiUrl+'sendPasswordResetMail',
            data: {'email': email}
        });
    }

    function resetPassword(params) {
        return $http({
            method: 'POST',
            url: config.apiUrl+'resetPassword',
            headers: {'Authorization': 'Bearer '+ params.token },
            data: {'password': params.password}
        });
    }

    return {
      login: login,
      sendVerificationMail: sendVerificationMail,
      sendPasswordResetMail: sendPasswordResetMail,
      resetPassword : resetPassword
	};
}