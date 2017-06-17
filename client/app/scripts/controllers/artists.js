'use strict'

angular.module('underfyApp').controller('ArtistsController', ['$scope','$sessionStorage','$window',function ($scope,$sessionStorage,$window) {

    $scope.artists = $sessionStorage.artists;

    $scope.selected = $scope.artists[0];

    $scope.selectArtist = function(artist) {
        $scope.selected = artist;
    };

    $scope.deleteArtist = function () {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://immense-taiga-71996.herokuapp.com/artists/" + $scope.selected.id ,
            "method": "DELETE",
            "headers": {
                "content-type": "application/x-www-form-urlencoded",
                "authorization": $sessionStorage.userData.token
            },
            "success": $scope.updateArtists
        };

        console.log(settings);

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    };


    $scope.addArtist = function (name,description,genres,images) {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://immense-taiga-71996.herokuapp.com/artists",
            "method": "POST",
            "headers": {
                "content-type": "application/x-www-form-urlencoded",
                "authorization": $sessionStorage.userData.token},
            "data": {
                "name": name,
                "description": description,
                "genres": genres,
                "images": images
            },
            "success": $scope.updateArtists
        };

        console.log(settings);

        $.ajax(settings).done(function (response) {
            console.log(response);
        });

    };

    $scope.HandlePopupResult =  function(result) {
        $scope.addArtist(result.name,result.description,result.genres,result.images);
    };

    $scope.addArtistWindow = function () {
        $window.open("../views/createArtist.html", "Agregar Artista", "width=550,height=500,left=10,top=150");
    };

    $scope.updateArtists = function () {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://immense-taiga-71996.herokuapp.com/artists",
            "method": "GET",
            "headers": {
                "content-type": "application/x-www-form-urlencoded",
                "authorization": $sessionStorage.userData.token
            }
        };

        console.log(settings);

        $.ajax(settings).done(function (response) {
            console.log(response);
            $scope.artists = response.artists;
        });

    }

}]);