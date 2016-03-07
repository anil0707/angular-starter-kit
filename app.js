// Declare app level module which depends on views, and components

angular
 .module('myApp', [
  
  'ui.router',
  'ui.bootstrap',
  'LocalStorageModule',
 
  'directives',
  'services',
  
  'dashboard',
  'login',
  'user'
 
 ])
 .config(['$locationProvider', '$urlRouterProvider', urlRouterProvider]); 

function urlRouterProvider($locationProvider, $urlRouterProvider) {
  
 //  $locationProvider.html5Mode({
	// enabled: true,
	// requireBase: false
 //  });

  //$urlRouterProvider.otherwise('/login');
}