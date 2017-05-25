'use strict';

/**
 * @ngdoc function
 * @name codeApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the codeApp
 */
angular.module('underfyApp')
  .controller('LoginCtrl', ['$scope','$location', '$mdSidenav', function($scope,$location, $mdSidenav){
 	
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
 
}]);

app.config(function($mdThemingProvider) {
  var customBlueMap = 		$mdThemingProvider.extendPalette('light-blue', {
    'contrastDefaultColor': 'light',
    'contrastDarkColors': ['50'],
    '50': 'ffffff'
  });
  $mdThemingProvider.definePalette('customBlue', customBlueMap);
  $mdThemingProvider.theme('default')
    .primaryPalette('customBlue', {
      'default': '500',
      'hue-1': '50'
    })
    .accentPalette('pink');
  $mdThemingProvider.theme('input', 'default')
        .primaryPalette('grey')
});