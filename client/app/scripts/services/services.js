'use strict';
angular.module('underfyApp').service('Requester', ['$sessionStorage',function ($sessionStorage) {

    var urlBase = "https://immense-taiga-71996.herokuapp.com";

    var settings = {
        "async": true,
        "crossDomain": true,
        "method": "GET",
        "headers": {"content-type": "application/x-www-form-urlencoded"},
    };

    this.getArtists = function () {
        settings.url = urlBase + "/artists/";
        settings.method = "GET";
        settings.data = {"token": $sessionStorage.userData.token};
        console.log(settings);

        $.ajax(settings).done(function (response) {
            console.log(response);
            $sessionStorage.artists = response.artists;
        });
    };

    this.getTracks = function () {
        settings.url = urlBase + "/tracks/";
        settings.method = "GET";
        settings.data = {"token": $sessionStorage.userData.token};
        console.log(settings);
        $.ajax(settings).done(function (response) {
            console.log(response);
            $sessionStorage.tracks = response.tracks;
        });
    };

    this.getAlbums = function () {
        settings.url =  urlBase + "/albums/";
        settings.method = "GET";
        settings.data = {"token": $sessionStorage.userData.token};
        console.log(settings);

        $.ajax(settings).done(function (response) {
            console.log(response);
            $sessionStorage.albums = response.albums;
        });
    };

    this.getUsers = function () {
        settings.url =  urlBase + "/users/";
        settings.method = "GET";
        settings.data = {"token": $sessionStorage.userData.token};
        console.log(settings);

        $.ajax(settings).done(function (response) {
            console.log(response);
            $sessionStorage.users = response.users;
        });
    };


    this.deleteArtist = function (id) {
        settings.url = urlBase + "/artists/" + id;
        settings.method = "DELETE";
        settings.data = {"token": $sessionStorage.userData.token};
        console.log(settings);

        return $.ajax(settings)
    };

    this.addArtist =  function (name,description,genres,images) {
        settings.url = urlBase + "/artists/";
        settings.method = "POST";
        settings.data = {"token": $sessionStorage.userData.token};
        settings.data.name = name;
        settings.images = images;
        settings.data.description = description;
        settings.data.genres = genres;
        console.log(settings);
        return $.ajax(settings)
    };

    this.deleteUser = function (id) {
        settings.url = urlBase + "/users/" + id;
        settings.method = "DELETE";
        settings.data = {"token": $sessionStorage.userData.token};
        console.log(settings);
        $.ajax(settings).done(function (response) {
            console.log(response);
            getUsers();
        });
    };

    this.addUser = function (userName,password,email,firstName,lastName,country,images,birthdate) {
        settings.url = urlBase + "/users/";
        settings.method = "POST";
        settings.data = {"token": $sessionStorage.userData.token};
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
            getUsers();
        });
    };

    this.deleteTrack = function (id) {
        settings.url = urlBase + "/tracks/" + id;
        settings.method = "DELETE";
        settings.data = {"token": $sessionStorage.userData.token};
        $.ajax(settings).done(function (response) {
            console.log(response);
            getTracks();
        });
    };

    this.addAlbum = function (artistsIds,name,genres,images,release_date) {
        settings.url = urlBase + "/albums/";
        settings.method = "POST";
        settings.data = {"token": $sessionStorage.userData.token};
        settings.data.artists = artistsIds;
        settings.data.name = name;
        settings.data.genres = genres;
        settings.data.images = images;
        settings.data.realease_date = release_date;
        console.log(settings);

        $.ajax(settings).done(function (response) {
            console.log(response);
            getAlbums();
        });
    };

    this.deleteAlbum = function(id){
        settings.url = urlBase + "/albums/" + id;
        settings.method = "DELETE";
        settings.data = {"token": $sessionStorage.userData.token};
        console.log(settings);

        $.ajax(settings).done(function (response) {
            console.log(response);
            getAlbums();
        });
    };

}]);