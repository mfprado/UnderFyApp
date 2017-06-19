'use strict';

angular.module('underfyApp').controller('TracksController',['$scope','$sessionStorage','$window', '$route',function ($scope, $sessionStorage, $window, $route) {

    $scope.tracks = $sessionStorage.tracks;
    $scope.selected = $scope.tracks[0];

    $scope.selectTrack = function(song) {
        $scope.selected = song;
    };

    $scope.deleteTrack = function () {
        Requester.deleteTrack($scope.selected.id);
        $scope.tracks = $sessionStorage.tracks;
        $scope.$apply();
    };

    $scope.addTrackWindow = function () {
        $window.open("../views/createTrack.html", "Agregar Cancion", "width=550,height=400,left=10,top=150");
    };
}]);