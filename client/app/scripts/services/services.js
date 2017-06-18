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
            settings.url = urlBase + "/artists/";
            console.log(settings);

            $.ajax(settings).done(function (response) {
                console.log(response);
                $sessionStorage.artists = response.artists;
            });
        };

        this.getTracks = function () {
            settings.url = urlBase + "/tracks/";
            console.log(settings);

            $.ajax(settings).done(function (response) {
                console.log(response);
                $sessionStorage.tracks = response.tracks;
            });
        };

        this.getAlbums = function () {
            settings.url =  urlBase + "/albums/";
            console.log(settings);

            $.ajax(settings).done(function (response) {
                console.log(response);
                $sessionStorage.albums = response.albums;
            });
        };

        this.getUsers = function () {
            settings.url =  urlBase + "/users/";
            console.log(settings);

            $.ajax(settings).done(function (response) {
                console.log(response);
                $sessionStorage.users = response.users;
            });
        };

        this.deleteAlbum = function(id){
            settings.url = urlBase + "/albums/" + id;
            settings.method = "DELETE";
            console.log(settings);

            return $.ajax(settings)
        };

        this.deleteArtist = function (id) {
            settings.url = urlBase + "/artists/" + id;
            settings.method = "DELETE";
            console.log(settings);

            return $.ajax(settings)
        }

        this.addArtist =  function (name,description,genres,images) {
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://immense-taiga-71996.herokuapp.com/artists",
                "method": "POST",
                "headers": {"content-type": "application/x-www-form-urlencoded"},
                "data": {
                    "token": $sessionStorage.userData.token,
                    "name": name,
                    "description": description,
                    "genres": genres,
                    "images": images
                }
            };
            settings.url = urlBase + "/artists";
            settings.method = "POST";

            console.log(settings);

            $.ajax(settings).done(function (response) {
                console.log(response);
            });

        };

    }]);