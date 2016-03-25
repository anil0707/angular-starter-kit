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

    function sendVerificationMail(email) {
    	return $http({
    		method: 'POST',
    		url: 'http://localhost:8000/sendEmailVerificationMail',
    		data: {'email': email}
    	});
    }

    function sendPasswordResetMail(email) {
        return $http({
            method: 'POST',
            url: 'http://localhost:8000/sendPasswordResetMail',
            data: {'email': email}
        });
    }

    function resetPassword(params) {
        return $http({
            method: 'POST',
            url: 'http://localhost:8000/resetPassword',
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