'use strict';
angular.module('underfyApp').service('Requester', ['$sessionStorage',function ($sessionStorage) {

    var urlBase = "https://immense-taiga-71996.herokuapp.com";

    var settings = {
        "async": true,
        "crossDomain": true,
        "method": "GET",
        "headers": {"content-type": "application/x-www-form-urlencoded"},
        "data":{"token": $sessionStorage.userData.token}
    };

    var getTrackAlbum = function (href,album,track) {

        settings.url = urlBase + href;
        settings.method = "GET";
        settings.success = (function (response) {
            console.log(response);
            $sessionStorage.albums[album].tracks[track] = response;
        });

        $.ajax(settings).done(function () {
            console.log('cargado track nuevo al album: ' + album);
            console.log($sessionStorage.albums);
            settings.success = '';
        })
    };

    var completeTracksAlbums = function(){
        console.log('en complete1');
        for (var album in $sessionStorage.albums) {
            for (var track in $sessionStorage.albums[album].tracks) {
                var href = $sessionStorage.albums[album].tracks[track].href;
                getTrackAlbum(href,album,track);
            };
        };
    };

    var getAlbumArtist = function (href,artist, album) {

        settings.url = urlBase + href;
        settings.method = "GET";
        settings.success = (function (response) {
            console.log(response);
            $sessionStorage.artists[artist].albums[album] = response;
        });

        $.ajax(settings).done(function () {
            console.log('cargado album nuevo al artista: ' + artist);
            console.log($sessionStorage.artists);
            settings.success = '';
        })
    };

    var completeAlbumsArtist = function(){
        console.log('en complete1');
        for (var artist in $sessionStorage.artists) {
            for (var album in $sessionStorage.artists[artist].albums) {
                var href = $sessionStorage.artists[artist].albums[album].href;
                getAlbumArtist(href,artist,album);
            };
        };
    };




    var getArtists = function () {
        settings.url = urlBase + "/artists/";
        settings.method = "GET";
        console.log(settings);

        $.ajax(settings).done(function (response) {
            console.log(response);
            $sessionStorage.artists = response.artists;
            completeAlbumsArtist();
        });
    };

    var getTracks = function () {
        settings.url = urlBase + "/tracks/";
        settings.method = "GET";
        console.log(settings);
        $.ajax(settings).done(function (response) {
            console.log(response);
            $sessionStorage.tracks = response.tracks;
        });
    };

    var getAlbums = function () {
        settings.url =  urlBase + "/albums/";
        settings.method = "GET";
        console.log(settings);

        $.ajax(settings).done(function (response) {
            console.log(response);
            $sessionStorage.albums = response.albums;
            completeTracksAlbums();
        });
    };

    this.getUsers = function () {
        settings.url =  urlBase + "/users/";
        settings.method = "GET";
        console.log(settings);

        $.ajax(settings).done(function (response) {
            console.log(response);
            $sessionStorage.users = response.users;
        });
    };


    this.deleteArtist = function (id) {
        settings.url = urlBase + "/artists/" + id;
        settings.method = "DELETE";
        console.log(settings);

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    };

    this.addArtist =  function (name,description,genres,images) {
        settings.url = urlBase + "/artists";
        settings.method = "POST";
        settings.data.name = name;
        settings.data.images = images;
        settings.data.description = description;
        settings.data.genres = genres;
        console.log(settings);
        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    };

    this.deleteUser = function (id) {
        settings.url = urlBase + "/users/" + id;
        settings.method = "DELETE";
        console.log(settings);
        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    };

    this.addUser = function (userName,password,email,firstName,lastName,country,images,birthdate) {
        settings.url = urlBase + "/users/";
        settings.method = "POST";
        settings.data.userName = userName;
        settings.data.password = password;
        settings.data.email = email;
        settings.data.firstName = firstName;
        settings.data.lastName = lastName;
        settings.data.country = country;
        settings.data.images = images;
        settings.data.birthdate = birthdate;

        console.log(settings);
        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    };

    this.deleteTrack = function (id) {
        settings.url = urlBase + "/tracks/" + id;
        settings.method = "DELETE";
        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    };

    this.addAlbum = function (artistsIds,name,genres,images,release_date) {

        settings.url = urlBase + "/albums/";
        settings.method = "POST";
        settings.data.artists = artistsIds;
        settings.data.name = name;
        settings.data.genres = genres;
        settings.data.images = images;
        settings.data.release_date = release_date;

        console.log('ADD ALBUM');
        console.log(artistsIds);
        console.log(settings);

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    };

    this.deleteAlbum = function(id){
        settings.url = urlBase + "/albums/" + id;
        settings.method = "DELETE";
        console.log(settings);

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    };

    this.updateUnderfy = function () {
        getArtists();
        getAlbums();
        getTracks();
    }

}]);