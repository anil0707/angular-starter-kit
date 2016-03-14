// Declare app level module which depends on views, and components

var myApp = angular
 .module('myApp', [
  
  'ui.router',
  'ui.bootstrap',
  'LocalStorageModule',
 
  'directives',
  'services',
  
  'home',
  'dashboard',
  'login',
  'user'
 
 ]);


myApp.config(function($locationProvider, $urlRouterProvider, $httpProvider, localStorageServiceProvider){

  localStorageServiceProvider.setPrefix('myApp');

  $httpProvider.interceptors.push('BearerAuthInterceptor');
  
  // $locationProvider.html5Mode({
  //   enabled: true,
  //   requireBase: false
  // });

  $urlRouterProvider.otherwise('/login');

});