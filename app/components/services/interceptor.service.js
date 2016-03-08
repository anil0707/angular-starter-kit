angular
	.module('services')
	.factory('HttpInterceptorService', HttpInterceptor);

function HttpInterceptor(localStorageService) {

    return {
		'request': function(config) {

		  config.headers.Token = localStorageService.get('authToken');
		  return config;
		}

		
		// // optional method
		// 'requestError': function(rejection) {
		//   console.log(rejection);
		// },



		// // optional method
		// 'response': function(response) {
		//   console.log(response);
		//   return response;
		// },

		// // optional method
		// 'responseError': function(rejection) {
		// 	console.log(rejection);
		// }
    };
}