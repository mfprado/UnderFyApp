'use strict';
angular.module('underfyApp').controller('ArtistsController', ['$scope','$sessionStorage','$window','$route','Requester',function ($scope,$sessionStorage,$window, $route, Requester) {

    $scope.update = function () {
        $scope.artists = $sessionStorage.artists;
    };

    $scope.update();

    $scope.selected = $scope.artists[0];

    $scope.selectArtist = function(artist) {
        $scope.selected = artist;
    };

    $scope.deleteArtist = function () {
        Requester.deleteArtist($scope.selected.id);
        $scope.updateArtists();
    };

    $scope.addArtist = function (name,description,genres,images) {
        Requester.addArtist(name,description,genres,images);
        $scope.updateArtists();
    };

    $scope.HandlePopupResult =  function(result) {
        $scope.addArtist(result.name,result.description,result.genres,result.images);
    };

    $scope.addArtistWindow = function () {
        $window.open("../views/createArtist.html", "Agregar Artista", "width=550,height=500,left=10,top=150");
    };

    $scope.updateArtists = function () {
        Requester.updateUnderfy();
        // $scope.$apply();
        $route.reload();
        $scope.update();
    };

    $scope.deleteAlbum = function (id) {
        Requester.deleteAlbum(id);
        $scope.updateArtists();
    }
}]);