'use strict';

/**
 * @ngdoc function
 * @name underfyApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the underfyApp
 */
angular.module('underfyApp')
  .controller('LoginCtrl', ['$scope','$location', '$mdSidenav','$sessionStorage', function($scope,$location, $mdSidenav, $sessionStorage){
 	
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };

      /**
       * Example:
       * @$sessionStorage.userData =  {
          "token": "f1d8586beda8e6b188852e80d253b1df510d43a0",
          "user": {
            "id": 1,
            "href": "users/1",
            "userName": "ironman"
          }
        }
       */

  var token = $sessionStorage.userData.token;
  $scope.userName = $sessionStorage.userData.user.userName;


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