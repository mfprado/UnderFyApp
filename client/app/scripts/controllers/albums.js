'use strict';

angular.module('underfyApp').controller('AlbumsController',['$scope','$sessionStorage','$window','$route','Requester',function ($scope,$sessionStorage,$window, $route, Requester) {

    $scope.albums = $sessionStorage.albums;
    $scope.selected = $scope.albums[0];


    $scope.selectAlbum = function(album) {
        $scope.selected = album;
    };

    $scope.deleteAlbum = function () {
        Requester.deleteAlbum($scope.selected.id);
    };

    $scope.addAlbum = function (artistsIds,name,genres,images,release_date) {
        Requester.addAlbum(artistsIds,name,genres,images,release_date);
        $scope.updateAlbums();
        $scope.albums = $sessionStorage.albums;
    };

    $scope.HandlePopupResult =  function(result) {
        $scope.addAlbum(result.artists,result.name,result.genres,result.images, result.release_date);
    };

    $scope.addAlbumWindow = function () {
        $window.open("../views/createAlbum.html", "Agregar Artista", "width=550,height=550,left=10,top=150");
    };

    $scope.updateAlbums = function () {
        Requester.updateUnderfy();
        $scope.albums = $sessionStorage.albums;
        $scope.selected = $scope.albums[0];
        $scope.$apply();
        // $route.reload();
    };

    $scope.deleteTrack = function (id) {
        $scope.track = Requester.deleteTrack(id);
        $scope.updateAlbums();
    };

}]);