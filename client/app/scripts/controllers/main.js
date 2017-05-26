'use strict';
/**
 * @ngdoc function
 * @name underfyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the underfyApp
 */


var app = angular.module('underfyApp');
  

app.controller('MainCtrl', ['$scope','$location','$rootScope','$http','$sessionStorage',function ($scope,$location,$rootScope,$http,$sessionStorage) {

    $scope.alertMessage = '';
    $scope.user ={
        userName: '',
        password: ''
    };

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://immense-taiga-71996.herokuapp.com/token",
        "method": "POST",
        "headers": {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache"
        },
        "data": {
            "userName": "ironman",
            "password": "pepperpots"
        }
    };

    
    $scope.submit = function () {

        if ( $scope.user.userName && $scope.user.password ) {
            $scope.alertMessage = '';
            settings.data.userName = $scope.user.userName;
            settings.data.password = $scope.user.password;

            $location.path('/login'); //until crossDomain works correctly

            console.log('Request sent: ');
            console.log(settings);

            var request = $.ajax(settings);
            var response;

            request.done(function (response) {
                console.log("Logueo exitoso");
                console.log(response);
                console.log(response.token());
                $sessionStorage.userData = response;

                $location.path('/login');});

            request.fail(function (response) {
                console.log("Autenticacion fracaso");
                $scope.alertMessage = 'username o password incorrecto';
                console.log(response);
                $sessionStorage.userData = {
                    "token": "f1d8586beda8e6b188852e80d253b1df510d43a0",
                    "user": {
                        "id": 1,
                        "href": "users/1",
                        "userName": "ironman"
                    }
                };
            });

        } else {
            console.log('Fracaso logueo, campos incompletos');
            $scope.alertMessage = 'Por favor complete ambos campos';
        };

    }

    $scope.about = function (){
        $location.path('/about');
    }
}]);
