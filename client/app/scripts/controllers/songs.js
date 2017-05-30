'use strict';

angular.module('underfyApp').controller('SongsController',['$scope','$sessionStorage',function ($scope,$sessionStorage) {

    $scope.songs = $sessionStorage.songs;
    $scope.selected = $scope.songs[0];

    $scope.selectSong = function(song) {
        $scope.selected = song;
    }

    $scope.deleteSong = function () {
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

    $scope.addSong = function (albumId,artistsIds,trackName) {
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
        $scope.addSong(5,[1,2], "Money");
}]);


//
//
// $scope.songs = [
//     {"album": { "name":"AM",
//         "id":"3",
//         "href":"albums/3" },
//         "artists":[{"name":"Artics Monkeys",
//             "href":"artists/2",
//             "id":2}],
//         "duration":240000,
//         "href":"tracks/1",
//         "id":1,
//         "name":"Do I Wanna Know?",
//         "popularity": 5},
//     {"album": { "name":"AM",
//         "id":"3",
//         "href":"albums/3" },
//         "artists":[{"name":"Artics Monkeys",
//             "href":"artists/2",
//             "id":2}],
//         "duration":180000,
//         "href":"tracks/2",
//         "id":2,
//         "name":"R U Mine",
//         "popularity": 4},
//     {"album": { "name":"Sacred Love",
//         "id":"1",
//         "href":"albums/1" },
//         "artists":[{"name":"Sting",
//             "href":"artists/1",
//             "id":1}],
//         "duration":240000,
//         "href":"tracks/3",
//         "id":3,
//         "name":"Inside",
//         "popularity": 4},
//     {"album": { "name":"Sacred Love",
//         "id":"1",
//         "href":"albums/1" },
//         "artists":[{"name":"Sting",
//             "href":"artists/1",
//             "id":1}],
//         "duration":240000,
//         "href":"tracks/4",
//         "id":4,
//         "name":"Send Your Love",
//         "popularity": 3},
//     {"album": { "name":"...Nothing Like the Sun",
//         "id":"2",
//         "href":"albums/2" },
//         "artists":[{"name":"Sting",
//             "href":"artists/1",
//             "id":1}],
//         "duration":233200,
//         "href":"tracks/5",
//         "id":5,
//         "name":"The Lazarus Heart",
//         "popularity": 4}];

