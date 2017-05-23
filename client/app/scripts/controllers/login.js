'use strict';

/**
 * @ngdoc function
 * @name codeApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the codeApp
 */
angular.module('underfyApp')
  .controller('LoginCtrl', function () {

    $scope.currentNavItem = 'page1'
  });

  

// (function() {
//   'use strict';

//   angular.module('underfyApp',['ngMaterial', 'ngMessages'])
//       .controller('LoginCtrl', LoginCtrl);

//   function LoginCtrl($scope) {
//     $scope.currentNavItem = 'page1';
//   }
// })();