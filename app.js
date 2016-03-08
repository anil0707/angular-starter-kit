// Declare app level module which depends on views, and components

var myApp = angular
 .module('myApp', [
  
  'ui.router',
  'ui.bootstrap',
  'LocalStorageModule',
 
  'directives',
  'services',
  
  'dashboard',
  'login',
  'user'
 
 ]);


myApp.config(function($locationProvider, $urlRouterProvider, $httpProvider, localStorageServiceProvider){

  localStorageServiceProvider.setPrefix('myApp');

  $httpProvider.interceptors.push('HttpInterceptorService');

  // $httpProvider.defaults.useXDomain = true;
  // delete $httpProvider.defaults.headers.common['X-Requested-With'];

  // $locationProvider.html5Mode({
  //   enabled: true,
  //   requireBase: false
  // });

  //$urlRouterProvider.otherwise('/login');

});