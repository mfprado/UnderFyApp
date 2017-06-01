'use strict';

angular.module('underfyApp').controller('AlbumsController',['$scope','$sessionStorage','$window',function ($scope,$sessionStorage,$window) {

    // $scope.albums = [
    //     {   "genres":["rock", "pop"],
    //         "artists":[{"name":"Sting",
    //             "href":"artists/1",
    //             "id":1}],
    //         "href":"albums/1",
    //         "id":1,
    //         "name":"Sacred Love",
    //         "popularity": 5,
    //         "images":["https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Sacred_love.jpg/220px-Sacred_love.jpg"],
    //         "realease_date": "29 de septiembre 2003",
    //         "tracks": ["Inside","Send Your Love", "Whenever I Say Your Name"]},
    //     {   "genres":["rock garage"],
    //         "artists":[{"name":"Artics Monkeys",
    //             "href":"artists/2",
    //             "id":2}],
    //         "href":"albums/3",
    //         "id":3,
    //         "name":"AM",
    //         "popularity": 5,
    //         "images":["http://ksassets.timeincuk.net/wp/uploads/sites/55/2013/09/2013ArcticMonkeys_Am_150713.jpg"],
    //         "realease_date": "9 de septiembre 2013",
    //         "tracks": ["Do I Wanna Know?","R U Mine?", "One For The Road"]}];

    $scope.albums = $sessionStorage.albums;
    $scope.selected = $scope.albums[0];


    $scope.selectAlbum = function(album) {
        $scope.selected = album;
    }

    $scope.deleteAlbum = function () {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://immense-taiga-71996.herokuapp.com/albums/" + $scope.selected.id,
            "method": "DELETE",
            "headers": {"content-type": "application/x-www-form-urlencoded"},
            "data": {"token": $sessionStorage.userData.token},
            "success": $scope.updateAlbums

        };
        console.log(settings);

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    }

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
            "url": "https://immense-taiga-71996.herokuapp.com/albums/",
            "method": "GET",
            "headers": {"content-type": "application/x-www-form-urlencoded"},
            "data": {"token": $sessionStorage.userData.token,
            "ids":"1,2,3,4"}
        };
        console.log(settings);

        $.ajax(settings).done(function (response) {
            console.log(response);
            $scope.albums = response.albums;
        });
    }


}]);
