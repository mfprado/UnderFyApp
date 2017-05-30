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
        $scope.albumsStatus = $scope.songsStatus = $scope.adjustStatus = "";}
  $scope.adjustSelected = function() {
        $scope.pageSelected = "views/adjusts.html"
        $scope.adjustStatus = "active";
        $scope.albumsStatus = $scope.songsStatus = $scope.artistsStatus = "";}
  $scope.albumsSelected = function() {
      $scope.pageSelected = "views/albums.html";
      $scope.albumsStatus = "active";
      $scope.adjustStatus  = $scope.songsStatus = $scope.artistsStatus = "";
  }
  $scope.songsSelected = function() {
      $scope.pageSelected = "views/songs.html";
      $scope.songsStatus = "active";
      $scope.adjustStatus  = $scope.albumsStatus = $scope.artistsStatus = "";
  }

  $scope.userName = $sessionStorage.userData.user.userName;

  var getTracks = function () {
      var settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://immense-taiga-71996.herokuapp.com/tracks/",
          "method": "GET",
          "headers": {
              "content-type": "application/x-www-form-urlencoded",
          },
          "data": {"token": $sessionStorage.userData.token}
      };

      console.log(settings);

      $.ajax(settings).done(function (response) {
          $sessionStorage.songs = response.tracks;
      });
  };

  var getAlbums = function () {
      var settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://immense-taiga-71996.herokuapp.com/albums/",
          "method": "GET",
          "headers": {
              "content-type": "application/x-www-form-urlencoded",
          },
          "data": {"token": $sessionStorage.userData.token}


      };

      console.log(settings);

      $.ajax(settings).done(function (response) {
          $sessionStorage.albums = response.albums;
      });
  };
  var getArtists = function () {
          var settings = {
              "async": true,
              "crossDomain": true,
              "url": "https://immense-taiga-71996.herokuapp.com/artists/",
              "method": "GET",
              "headers": {
                  "content-type": "application/x-www-form-urlencoded",
              },
              "data": {"token": $sessionStorage.userData.token}


          };

          console.log(settings);

          $.ajax(settings).done(function (response) {
              $sessionStorage.albums = response.albums;
          });
      };

  getTracks();
  console.log($sessionStorage.songs);
  // getAlbums();  //TODO: implementar en el shared
  // getArtists(); //TODO: implementar en el shared


}]);







