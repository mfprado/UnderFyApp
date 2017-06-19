'use strict';
angular.module('underfyApp').controller('ArtistsController', ['$scope','$sessionStorage','$window','$route','Requester',function ($scope,$sessionStorage,$window, $route, Requester) {

    $scope.artists = $sessionStorage.artists;

    $scope.selected = $scope.artists[0];

    $scope.selectArtist = function(artist) {
        $scope.selected = artist;
    };

    $scope.deleteArtist = function () {
        Requester.deleteArtist($scope.selected.id);
    };

    $scope.addArtist = function (name,description,genres,images) {
        Requester.addArtist(name,description,genres,images);
    };

    $scope.HandlePopupResult =  function(result) {
        $scope.addArtist(result.name,result.description,result.genres,result.images);
    };

    $scope.addArtistWindow = function () {
        $window.open("../views/createArtist.html", "Agregar Artista", "width=550,height=500,left=10,top=150");
    };

    $scope.updateArtists = function () {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://immense-taiga-71996.herokuapp.com/artists",
            "method": "GET",
            "headers": {"content-type": "application/x-www-form-urlencoded"},
            "data": {"token": $sessionStorage.userData.token}
        };

        console.log(settings);

        $.ajax(settings).done(function (response) {
            console.log(response);
            $sessionStorage.artists  = response.artists;
            $scope.artists = response.artists;
            $route.reload()
        });

    }

}]);
