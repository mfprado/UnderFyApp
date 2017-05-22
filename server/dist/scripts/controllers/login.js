'use strict';

/**
 * @ngdoc function
 * @name underfyApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the underfyApp
 */
angular.module('underfyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
  .controller('LoginCtrl', function ($scope) {

    $scope.currentNavItem = 'page1';
  });
