'use strict';
angular.module('underfyApp').controller('ArtistsController', ['$scope','$sessionStorage','$window','Requester',function ($scope,$sessionStorage,$window, Requester) {

    $scope.update = function () {
        $scope.artists = $sessionStorage.artists;
    };

    $scope.update();

    $scope.selected = $scope.artists[0];

    $scope.selectArtist = function(artist) {
        $scope.selected = artist;
        $scope.update()
    };

    $scope.deleteArtist = function () {
        Requester.deleteArtist($scope.selected.id);
        $scope.updateArtists();
    };

    $scope.addArtist = function (name,genres,images) {
        Requester.addArtist(name,genres,images);
        $scope.updateArtists();
    };

    $scope.addAlbumToArtists = function (name,description,genres,images, release_date) {
        Requester.addAlbum($scope.selected.id, name, genres, images, release_date);
        $scope.updateArtists();
    };

    $scope.addAlbumWindow = function () {
        $window.open("../views/createAlbumInArtist.html", "Agregar Album al Artista: " + $scope.selected.name, "width=550,height=420,left=100,top=150");
    };

    $scope.HandlePopupResultAlbum =  function(result) {
        $scope.addAlbumToArtists(result.name, result.description, result.genres,result.images, result.release_date);
    };

    $scope.HandlePopupResult =  function(result) {
        $scope.addArtist(result.name,result.genres,result.images);
    };

    $scope.addArtistWindow = function () {
        $window.open("../views/createArtist.html", "Agregar Artista", "width=550,height=420,left=100,top=150");
    };

    $scope.updateArtists = function () {
        if(Requester.updateUnderfy()){
            $scope.update();
        };
    };

    $scope.deleteAlbum = function (id) {
        Requester.deleteAlbum(id);
        $scope.updateArtists();
    }

    $scope.HandlePopChangeImg =  function(result) {
        $scope.selected.images = result.images;
        Requester.changeArtistImg($scope.selected.name,$scope.selected.genres,result.images,$scope.selected.id);
    };

    $scope.changeImgWindow = function () {
        $window.open("../views/changeArtistImg.html", "Cambiar Imagen", "width=550,height=178,left=90,top=150");
    };

}]);