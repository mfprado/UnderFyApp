'use strict';

angular.module('underfyApp').controller('SongsController',['$scope','$sessionStorage',function ($scope,$sessionStorage) {

    $scope.songs = $sessionStorage.songs;
    $scope.selected = $scope.songs[0];

    // $scope.toggleList = toggleArtistList;
    // $scope.share = share;


    $scope.selectSong = function(song) {
        $scope.selected = song;
    }
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

