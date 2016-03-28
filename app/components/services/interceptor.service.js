angular
	.module('services')
	.factory('BearerAuthInterceptor', BearerAuthInterceptor);

function BearerAuthInterceptor(localStorageService, $location, $q, $rootScope) {

	if ($rootScope.activeCalls === undefined) {
            $rootScope.activeCalls = 0;
    }

    return {
		'request': function(config) {
		
			$rootScope.activeCalls += 1;
			var authToken = localStorageService.get('authToken');

			if(authToken) {
				config.headers.Authorization = 'Bearer ' + authToken;
			}

		  	return config;
		},
		'response': function(response) {
			$rootScope.activeCalls -= 1;
		  	return response;
		},
		'requestError': function(rejection) {
			$rootScope.activeCalls -= 1;
		  	return $q.reject(rejection);
		},
		'responseError': function(rejection) {
			$rootScope.activeCalls -= 1;

			localStorageService.remove('authToken');


			//If the auth token is expired
			// if(rejection.status == 401) {
			// 	$location.path('app.login');
			// }

         	return $q.reject(rejection);
		}
    };
}