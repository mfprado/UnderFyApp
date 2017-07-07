'use strict';

angular.module('underfyApp').controller('TracksController',['$scope','$sessionStorage','$window', '$route','Requester',function ($scope, $sessionStorage, $window, $route,Requester) {


    $scope.tracks = $sessionStorage.tracks;
    $scope.selected = $scope.tracks[0];

    $scope.selectTrack = function(song) {
        $scope.selected = song;
        $scope.tracks = $sessionStorage.tracks;
    };

    $scope.deleteTrack = function () {
        Requester.deleteTrack($scope.selected.id);
        $scope.updateTracks();
        $scope.tracks = $sessionStorage.tracks;
    };

    $scope.addTrackWindow = function () {
        $window.open("../views/createTrack.html", "Agregar Cancion", "width=550,height=380,left=10,top=150");
        $scope.updateTracks();
    };

    $scope.updateTracks = function () {
        if(Requester.updateUnderfy()){
            $scope.tracks = $sessionStorage.tracks;
        };
        $scope.tracks = $sessionStorage.tracks;

    }
}]);