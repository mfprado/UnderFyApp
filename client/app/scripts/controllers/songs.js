'use strict';

angular.module('underfyApp').service('songsService', SongsService);

function SongsService($q) {


    var songsRequest = {
        "async": true,
        "crossDomain": true,
        "url": "https://immense-taiga-71996.herokuapp.com/token/tracks",
        "method": "POST",
        "headers": {
            "content-type": "application/x-www-form-urlencoded",
            "authorization": "b20c1133f9d541cb2f79fb3c79dab653fd5c2da5",
            "cache-control": "no-cache",
            "postman-token": "ede9b86e-7da0-6bf1-8888-621fe0bef9e0"
        },
        "data": {
            "albumId": "1",
            "artists": "0",
            "name": "Track #1"
        }
    }

        $.ajax(settings).done(function (response) {
        console.log(response);
    });

}