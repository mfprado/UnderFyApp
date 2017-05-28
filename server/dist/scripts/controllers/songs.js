'use strict';

angular.module('underfyApp').controller('SongsController',['$scope','$sessionStorage',function ($scope,$sessionStorage) {

    $scope.songs = [
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
        "popularity": 5},
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
            "popularity": 4},
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
            "popularity": 4},
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
            "popularity": 3},
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
            "popularity": 4}];


    // $scope.toggleList = toggleArtistList;
    // $scope.share = share;
    $scope.selected = $scope.songs[0];


    $scope.selectSong = function(song) {
        $scope.selected = song;
    }



    var token = $sessionStorage.userData.token;

    var getTracks = function (token) {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://immense-taiga-71996.herokuapp.com/token/tracks",
            "method": "GET",
            "headers": {
                "content-type": "application/x-www-form-urlencoded",
                "authorization": "b20c1133f9d541cb2f79fb3c79dab653fd5c2da5",
                "cache-control": "no-cache",
                "postman-token": "ede9b86e-7da0-6bf1-8888-621fe0bef9e0"
            }
        }


        $.ajax(settings).done(function (response) {
            console.log("GET tracks: ");
            console.log(response);
            $scope.songs = response;
        });
    }

}]);
