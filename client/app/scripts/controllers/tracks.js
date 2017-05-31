'use strict';

angular.module('underfyApp').controller('TracksController',['$scope','$sessionStorage','$window',function ($scope, $sessionStorage, $window) {

    $scope.tracks = $sessionStorage.tracks;
    $scope.selected = $scope.tracks[0];

    $scope.selectTrack = function(song) {
        $scope.selected = song;
    }

    $scope.deleteTrack = function () {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://immense-taiga-71996.herokuapp.com/tracks/" + $scope.selected.id,
            "method": "DELETE",
            "headers": {
                "content-type": "application/x-www-form-urlencoded",
            },
            "data": {"token": $sessionStorage.userData.token}
        };

        console.log(settings);

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    }

    $scope.addTrack = function (albumId, artistsIds, trackName) {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://immense-taiga-71996.herokuapp.com/tracks",
            "method": "POST",
            "headers": {
                "content-type": "application/x-www-form-urlencoded",
            },
            "data": {
                "token": $sessionStorage.userData.token,
                "albumId": albumId,
                "artists": artistsIds,
                "name": trackName
            }
        };

        console.log(settings);
        $.ajax(settings).done(function (response) {
            console.log(response);
        });

    };

    $scope.HandlePopupResult =  function(result) {
        $scope.addTrack(result.albumId,result.artistsIds,result.name);
    };

    $scope.openNew = function () {
        $window.open("../views/createTrack.html", "Agregar Cancion", "width=550,height=400,left=10,top=150");
    }
}]);
