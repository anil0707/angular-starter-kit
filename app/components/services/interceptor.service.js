angular
	.module('services')
	.factory('BearerAuthInterceptor', BearerAuthInterceptor);

function BearerAuthInterceptor(localStorageService, $location) {

    return {
		'request': function(config) {

		  config.headers.Authorization = 'Bearer ' + localStorageService.get('authToken');
		  return config;
		},
		'response': function(response) {
			
		  return response;
		},
		'requestError': function(rejection) {
		  console.log(rejection);
		},
		'responseError': function(rejection) {

			localStorageService.remove('authToken');
         	$location.path('login');

	        return rejection;
		}
    };
}