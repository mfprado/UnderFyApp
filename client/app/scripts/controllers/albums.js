'use strict';

angular.module('underfyApp').controller('AlbumsController',['$scope','$sessionStorage','$window','$route','Requester',function ($scope,$sessionStorage,$window, $route, Requester) {

    $scope.albums = $sessionStorage.albums;
    $scope.selected = $scope.albums[0];


    $scope.selectAlbum = function(album) {
        $scope.selected = album;
    };

    $scope.deleteAlbum = function () {
        Requester.deleteArtist($scope.selected.id);
    };

    $scope.addAlbum = function (artistsIds,name,genres,images,release_date) {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://immense-taiga-71996.herokuapp.com/albums",
            "method": "POST",
            "headers": {"content-type": "application/x-www-form-urlencoded"},
            "data": {
                "token": $sessionStorage.userData.token,
                "artists":artistsIds,
                "genres":genres,
                "images": images,
                "name": name,
                "release_date": release_date
            },
            "success": $scope.updateAlbums
        };
        console.log(settings);

        $.ajax(settings).done(function (response) {
            console.log(response);
        });

    };

    $scope.HandlePopupResult =  function(result) {
        $scope.addAlbum(result.artistsIds,result.name,result.genres,result.images, result.realease_date);
    };

    $scope.addAlbumWindow = function () {
        $window.open("../views/createAlbum.html", "Agregar Artista", "width=550,height=550,left=10,top=150");
    };

    $scope.updateAlbums = function () {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://immense-taiga-71996.herokuapp.com/albums",
            "method": "GET",
            "headers": {"content-type": "application/x-www-form-urlencoded"},
            "data": {"token": $sessionStorage.userData.token}
        };
        console.log(settings);

        $.ajax(settings).done(function (response) {
            console.log(response);
            $scope.albums = response.albums;
            $route.reload()
        });
    }


}]);
