<<<<<<< HEAD
'use strict';
angular.module('underfyApp').controller('ArtistsController', ['$scope','$sessionStorage','$window','$route','Requester',function ($scope,$sessionStorage,$window, $route, Requester) {

    $scope.artists = $sessionStorage.artists;
=======
'use strict'

angular.module('underfyApp').controller('ArtistsController', ['$scope','$sessionStorage','$window',function ($scope,$sessionStorage,$window) {

    $scope.artists = [
        {"genres": ["Rock","Pop","Jazz"],
            "href": "artists/1",
            "id":1,
            "images":["http://www.billboard.com/files/media/sting-live-AMA-show-2016-billboard-1548.jpg"],
            "albums":[
                {"href": "albums/1",
                    "id":1,
                    "name": "Sacred Love"},
                { "href": "albums/2",
                    "id":2,
                    "name": "...Nothing Like the Sun"}],
            "name": "Sting",
            "popularity": 4

        },
        {"genres": ["Indie Rock","Garage Rock"],
            "href": "artists/2",
            "id":2,
            "images":["https://yt3.ggpht.com/-UgwvTLu27lY/AAAAAAAAAAI/AAAAAAAAAAA/NxlYe18w110/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"],
            "albums":[
                {"href": "albums/3",
                    "id":3,
                    "name": "AM"}],
            "name": "Artics Monkeys",
            "popularity": 4
        }
    ];

    // $scope.artists = $sessionStorage.artists;
>>>>>>> remotes/origin/master

    $scope.selected = $scope.artists[0];

    $scope.selectArtist = function(artist) {
        $scope.selected = artist;
    };

    $scope.deleteArtist = function () {
<<<<<<< HEAD
        Requester.deleteArtist($scope.selected.id).done(function (response) {
=======
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://immense-taiga-71996.herokuapp.com/artists/" + $scope.selected.id ,
            "method": "DELETE",
            "headers": {
                "content-type": "application/x-www-form-urlencoded",
            },
            "data": {"token": $sessionStorage.userData.token},
            "success": $scope.updateArtists
        };

        console.log(settings);

        $.ajax(settings).done(function (response) {
>>>>>>> remotes/origin/master
            console.log(response);
            $scope.updateArtists();
        });
    };

    $scope.addArtist = function (name,description,genres,images) {
<<<<<<< HEAD
        Requester.addArtist(name,description,genres,images).done(function (response) {
=======
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://immense-taiga-71996.herokuapp.com/artists",
            "method": "POST",
            "headers": {
                "content-type": "application/x-www-form-urlencoded",
            },
            "data": {
                "token": $sessionStorage.userData.token,
                "name": name,
                "description": description,
                "genres": genres,
                "images": images
            },
            "success": $scope.updateArtists
        };

        console.log(settings);

        $.ajax(settings).done(function (response) {
>>>>>>> remotes/origin/master
            console.log(response);
            $scope.updateArtists();
        });

    };

    $scope.HandlePopupResult =  function(result) {
        $scope.addArtist(result.name,result.description,result.genres,result.images);
    };

    $scope.addArtistWindow = function () {
        $window.open("../views/createArtist.html", "Agregar Artista", "width=550,height=500,left=10,top=150");
    };

    $scope.updateArtists = function () {
<<<<<<< HEAD
        Requester.getArtists();
        $scope.artists = $sessionStorage.artists;
        // $route.reload();
        $scope.$apply();

    }

}]);
=======
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://immense-taiga-71996.herokuapp.com/artists/",
            "method": "GET",
            "headers": {
                "content-type": "application/x-www-form-urlencoded",
            },
            "data": {
                "token": $sessionStorage.userData.token,
                "ids":"1,2,3,4"
            }


        };

        console.log(settings);

        $.ajax(settings).done(function (response) {
            console.log(response);
            $scope.artists = response.artists;
        });

    }

}]);
>>>>>>> remotes/origin/master
