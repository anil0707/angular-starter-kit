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

myApp.config(config);
myApp.run(run);

function config($locationProvider, $urlRouterProvider, $httpProvider, localStorageServiceProvider){

  localStorageServiceProvider.setPrefix('myApp');

  $httpProvider.interceptors.push('BearerAuthInterceptor');
  
  // $locationProvider.html5Mode({
  //   enabled: true,
  //   requireBase: false
  // });

  $urlRouterProvider.otherwise('/');

}

function run($rootScope, $state, localStorageService){

  $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {

      $rootScope.logged = false;

      var token =  localStorageService.get('authToken');

      if (!token && toState.auth !== false) {

          event.preventDefault();
          $state.go('app.login');
        
      } else if(token) {

         $rootScope.logged = true;

         if(toState.auth === false) {
            event.preventDefault();
         }
      }
      
  });
}


