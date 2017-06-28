'use strict';
angular.module('underfyApp').controller('LoginCtrl',['$scope','$location','Requester', function($scope,$location, Requester){


    $scope.pageSelected = "views/artists.html";
    $scope.artistsStatus = "active";

    $scope.artistsSelected = function() {
        Requester.updateUnderfy();
        $scope.pageSelected = "views/artists.html";
        $scope.artistsStatus = "active";
        $scope.albumsStatus = $scope.tracksStatus = $scope.usersStatus =  "";
    };
    $scope.albumsSelected = function() {
        Requester.updateUnderfy();
        $scope.pageSelected = "views/albums.html";
        $scope.albumsStatus = "active";
        $scope.tracksStatus = $scope.artistsStatus = $scope.usersStatus = "";
    };
    $scope.tracksSelected = function() {
        Requester.updateUnderfy();
        $scope.pageSelected = "views/tracks.html";
        $scope.tracksStatus = "active";
        $scope.albumsStatus = $scope.artistsStatus = $scope.usersStatus = "";
    };

    $scope.usersSelected = function() {
        Requester.updateUnderfy();
        Requester.getUsers();
        $scope.pageSelected = "views/users.html";
        $scope.usersStatus = "active";
        $scope.albumsStatus = $scope.artistsStatus = $scope.tracksStatus = "";
    };

    Requester.updateUnderfy();
    Requester.getUsers();

}]);