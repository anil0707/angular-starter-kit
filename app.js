'use strict';

// Declare app level module which depends on views, and components
angular
 .module('myApp', [
  
  'ui.router',
  'ui.bootstrap',
  'LocalStorageModule',
 
  'directives',
  'services',
  
  'login'
 
 ])
 .config(['$locationProvider', '$urlRouterProvider', urlRouterProvider]); 

function urlRouterProvider($locationProvider, $urlRouterProvider) {
  
 //  $locationProvider.html5Mode({
	// enabled: true,
	// requireBase: false
 //  });

  $urlRouterProvider.otherwise('/login');
};