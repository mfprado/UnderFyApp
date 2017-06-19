'use strict';
angular.module('underfyApp').controller('ArtistsController', ['$scope','$sessionStorage','$window','$route','Requester',function ($scope,$sessionStorage,$window, $route, Requester) {

    $scope.artists = $sessionStorage.artists;
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
        Requester.getArtists();
        $scope.artists = $sessionStorage.artists;
        $scope.selected = $scope.artists[0];
        // $scope.$apply();
        $route.reload();
    };
}]);
