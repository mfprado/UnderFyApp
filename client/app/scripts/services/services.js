'use strict';
angular.module('underfyApp').service('Requester', ['$sessionStorage',function ($sessionStorage) {

        var urlBase = "https://immense-taiga-71996.herokuapp.com";

        var settings = {
            "async": true,
            "crossDomain": true,
            "method": "GET",
            "headers": {"content-type": "application/x-www-form-urlencoded"},
            "data": {"token": $sessionStorage.userData.token}
        };


        this.getArtists = function () {
            settings.url = urlBase + "/artists";
            console.log(settings);

            $.ajax(settings).done(function (response) {
                console.log(response);
                $sessionStorage.artists = response.artists;
            });
        };

        this.getTracks = function () {
            settings.url = urlBase + "/tracks";
            console.log(settings);

            $.ajax(settings).done(function (response) {
                console.log(response);
                $sessionStorage.tracks = response.tracks;
            });
        };

        this.getAlbums = function () {
            settings.url =  urlBase + "/albums";
            console.log(settings);

            $.ajax(settings).done(function (response) {
                console.log(response);
                $sessionStorage.albums = response.albums;
            });
        };

        this.getUsers = function () {
            settings.url =  urlBase + "/users"
            console.log(settings);

            $.ajax(settings).done(function (response) {
                console.log(response);
                $sessionStorage.users = response.users;
            });
        };

    }]);