'use strict';

<<<<<<< HEAD
angular.module('underfyApp').controller('TracksController',['$scope','$sessionStorage','$window', '$route',function ($scope, $sessionStorage, $window, $route) {
=======
angular.module('underfyApp').controller('TracksController',['$scope','$sessionStorage','$window',function ($scope, $sessionStorage, $window) {

    $scope.tracks = [
        {"album": { "name":"AM",
            "id":"3",
            "href":"albums/3" },
            "artists":[{"name":"Artics Monkeys",
                "href":"artists/2",
                "id":2}],
            "duration":240000,
            "href":"tracks/1",
            "id":1,
            "name":"Do I Wanna Know?",
            "popularity": {"rate":5}},
        {"album": { "name":"AM",
            "id":"3",
            "href":"albums/3" },
            "artists":[{"name":"Artics Monkeys",
                "href":"artists/2",
                "id":2}],
            "duration":180000,
            "href":"tracks/2",
            "id":2,
            "name":"R U Mine",
            "popularity": {"rate":4}
        },
        {"album": { "name":"Sacred Love",
            "id":"1",
            "href":"albums/1" },
            "artists":[{"name":"Sting",
                "href":"artists/1",
                "id":1}],
            "duration":240000,
            "href":"tracks/3",
            "id":3,
            "name":"Inside",
            "popularity": {"rate":4}},
        {"album": { "name":"Sacred Love",
            "id":"1",
            "href":"albums/1" },
            "artists":[{"name":"Sting",
                "href":"artists/1",
                "id":1}],
            "duration":240000,
            "href":"tracks/4",
            "id":4,
            "name":"Send Your Love",
            "popularity": {"rate":3}},
        {"album": { "name":"...Nothing Like the Sun",
            "id":"2",
            "href":"albums/2" },
            "artists":[{"name":"Sting",
                "href":"artists/1",
                "id":1}],
            "duration":233200,
            "href":"tracks/5",
            "id":5,
            "name":"The Lazarus Heart",
            "popularity": {"rate":4}}];

>>>>>>> remotes/origin/master

    // $scope.tracks = $sessionStorage.tracks;
    $scope.selected = $scope.tracks[0];

    $scope.selectTrack = function(song) {
        $scope.selected = song;
    };

    $scope.deleteTrack = function () {
<<<<<<< HEAD
        Requester.deleteTrack($scope.selected.id);
        $scope.tracks = $sessionStorage.tracks;
        $scope.$apply();
=======
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://immense-taiga-71996.herokuapp.com/tracks/" + $scope.selected.id,
            "method": "DELETE",
            "headers": {"content-type": "application/x-www-form-urlencoded"},
            "data": {"token": $sessionStorage.userData.token},
            "success" : $scope.updateTracks
        };
        console.log(settings);

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    };

    $scope.addTrack = function (albumId, artistsIds, trackName) {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://immense-taiga-71996.herokuapp.com/tracks",
            "method": "POST",
            "headers": {"content-type": "application/x-www-form-urlencoded"},
            "data": {
                "token": $sessionStorage.userData.token,
                "albumId": albumId,
                "artists": artistsIds,
                "name": trackName
            },
            "success":$scope.updateTracks
        };

        console.log(settings);
        $.ajax(settings).done(function (response) {
            console.log(response);
        });

>>>>>>> remotes/origin/master
    };

    $scope.addTrackWindow = function () {
<<<<<<< HEAD
        $window.open("../views/createTrack.html", "Agregar Cancion", "width=550,height=400,left=10,top=150");
    };
}]);
=======
        $window.open("../views/createTrack.html", "Agregar Cancion", "width=550,height=500,left=10,top=150");
    };

    $scope.updateTracks = function () {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://immense-taiga-71996.herokuapp.com/tracks/",
            "method": "GET",
            "headers": {"content-type": "application/x-www-form-urlencoded"},
            "data": {"token": $sessionStorage.userData.token,
                    "ids":"1,2,3,4"}
        };
        console.log(settings);

        $.ajax(settings).done(function (response) {
            console.log(response);
            $scope.tracks = response.tracks;
        });
    };

}]);
>>>>>>> remotes/origin/master
