'use strict';

/**
 * @ngdoc function
 * @name underfyApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the underfyApp
 */
angular.module('underfyApp')
  .controller('LoginCtrl', ['$scope','$location', '$sessionStorage', function($scope,$location, $sessionStorage){


  $scope.pageSelected = "views/artists.html";
  $scope.artistsStatus = "active";

  $scope.artistsSelected = function() {
    $scope.pageSelected = "views/artists.html";
    $scope.artistsStatus = "active";
    $scope.albumsStatus = $scope.tracksStatus =  "";
  };
  $scope.albumsSelected = function() {
    $scope.pageSelected = "views/albums.html";
    $scope.albumsStatus = "active";
    $scope.tracksStatus = $scope.artistsStatus = "";
   };
  $scope.trackssSelected = function() {
    $scope.pageSelected = "views/tracks.html";
    $scope.tracksStatus = "active";
    $scope.albumsStatus = $scope.artistsStatus = "";
  };

  $scope.userName = $sessionStorage.userData.user.userName;
  $scope.userInfo = $sessionStorage.userInfo;
  $scope.token = $sessionStorage.userData.token;

  var getTracks = function () {
      var settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://immense-taiga-71996.herokuapp.com/tracks/",
          "method": "GET",
          "headers": {"content-type": "application/x-www-form-urlencoded"},
          "data": { "token": $sessionStorage.userData.token,
                    "ids":"1,2,3,4"}
      };
      console.log(settings);

      $.ajax(settings).done(function (response) {
          console.log(response);
          $sessionStorage.tracks = response.tracks;
      });
  };

  var getAlbums = function () {
      var settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://immense-taiga-71996.herokuapp.com/albums/",
          "method": "GET",
          "headers": {"content-type": "application/x-www-form-urlencoded"},
          "data": { "token": $sessionStorage.userData.token,
                    "ids":"1,2,3,4"}
      };
      console.log(settings);

      $.ajax(settings).done(function (response) {
          console.log(response);
          $sessionStorage.albums = response.albums;
      });
  };
  var getArtists = function () {
      var settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://immense-taiga-71996.herokuapp.com/artists/",
          "method": "GET",
          "headers": {"content-type": "application/x-www-form-urlencoded"},
          "data": {
              "token": $sessionStorage.userData.token,
              "ids":"1,2,3,4"
          }
      };
      console.log(settings);

      $.ajax(settings).done(function (response) {
          console.log(response);
          $sessionStorage.artists = response.artists;
      });
  };

  getTracks();
  getAlbums();
  getArtists();

}]);







