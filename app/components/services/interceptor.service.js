angular
	.module('services')
	.factory('BearerAuthInterceptor', BearerAuthInterceptor);

function BearerAuthInterceptor(localStorageService) {

    return {
		'request': function(config) {

		  config.headers.Authorization = 'Bearer ' + localStorageService.get('authToken');
		  return config;
		},
		'response': function(response) {
			
		  return response;
		}

		
		// // optional method
		// 'requestError': function(rejection) {
		//   console.log(rejection);
		// },
	
		// // optional method
		// 'responseError': function(rejection) {
		// 	console.log(rejection);
		// }
    };
}