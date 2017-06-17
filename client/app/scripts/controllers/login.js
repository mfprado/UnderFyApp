'use strict';

/**
 * @ngdoc function
 * @name underfyApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the underfyApp
 */
var myApp = angular.module('underfyApp');

myApp.controller('LoginCtrl',['$scope','$location','Requester', function($scope,$location, Requester){


  $scope.pageSelected = "views/artists.html";
  $scope.artistsStatus = "active";

  $scope.artistsSelected = function() {
    $scope.pageSelected = "views/artists.html";
    $scope.artistsStatus = "active";
    $scope.albumsStatus = $scope.tracksStatus = $scope.usersStatus =  "";
  };
  $scope.albumsSelected = function() {
    $scope.pageSelected = "views/albums.html";
    $scope.albumsStatus = "active";
    $scope.tracksStatus = $scope.artistsStatus = $scope.usersStatus = "";
   };
  $scope.tracksSelected = function() {
    $scope.pageSelected = "views/tracks.html";
    $scope.tracksStatus = "active";
    $scope.albumsStatus = $scope.artistsStatus = $scope.usersStatus = "";
  };

  $scope.usersSelected = function() {
      $scope.pageSelected = "views/users.html";
      $scope.usersStatus = "active";
      $scope.albumsStatus = $scope.artistsStatus = $scope.tracksStatus = "";
  };

  Requester.getTracks();
  Requester.getAlbums();
  Requester.getArtists();
  Requester.getUsers();

}]);







