angular
    .module('directives')
    .directive('mainHeader', Header);
   
function Header(localStorageService) {
    return {
        templateUrl: 'app/components/partials/main-menu.partial.html',
        restrict: 'EA',
        link: function(scope, elem, attrs) {

    		scope.logged = localStorageService.get('authToken');
	    }
	};
}