angular
	.module('services')
	.factory('BearerAuthInterceptor', BearerAuthInterceptor);

function BearerAuthInterceptor(localStorageService, $location, $q) {

    return {
		'request': function(config) {

		  var authToken = localStorageService.get('authToken');

		  if(authToken) {
		  	config.headers.Authorization = 'Bearer ' + authToken;
		  }

		  return config;
		},
		'response': function(response) {
			
		  return response;
		},
		'requestError': function(rejection) {
			
		  return $q.reject(rejection);
		},
		'responseError': function(rejection) {

			localStorageService.remove('authToken');
         	$location.path('app.login');

         	return $q.reject(rejection);
		}
    };
}