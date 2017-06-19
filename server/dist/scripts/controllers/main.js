'use strict';
/**
 * @ngdoc function
 * @name underfyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the underfyApp
 */


<<<<<<< HEAD
angular.module('underfyApp').controller('MainCtrl', ['$scope','$location','$rootScope','$http','$sessionStorage',function ($scope,$location,$rootScope,$http,$sessionStorage) {
=======
var app = angular.module('underfyApp');


app.controller('MainCtrl', ['$scope','$location','$rootScope','$http','$sessionStorage',function ($scope,$location,$rootScope,$http,$sessionStorage) {
>>>>>>> remotes/origin/master

    $sessionStorage.userData = {
        "user" : {
            "id":1,
            "userName": "ironman"
        },
        "token":"453152345234523452345234523gsdgds"

    }

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
        "headers": {"content-type": "application/x-www-form-urlencoded"},
        "data": {
            "userName": " ",
            "password": " "
        },
        "success" : function() {
            $location.path('/login');
        }
    };

<<<<<<< HEAD
    var set = true; //FIX
=======
    var set = false; //FIX  pasar a true cuando ande el shared
>>>>>>> remotes/origin/master
    $scope.submit = function () {

        if ( $scope.user.userName && $scope.user.password && set ) {
            $scope.alertMessage = '';
            settings.data.userName = $scope.user.userName;
            settings.data.password = $scope.user.password;

            console.log('Request sent: ');
            console.log(settings);

            var request = $.ajax(settings);
            var response;

            $location.path('/login');

            request.done(function (response) {
                set = false;
                $sessionStorage.userData = response;
                console.log("Logueo exitoso");
                console.log(response);
                $location.path('/login');
            });

            request.fail(function (response) {
                alert('Username o Password incorrecta');
                $scope.alertMessage = 'username o password incorrecto';
                console.log("Autenticacion fracaso");
                console.log(response);
            });

        } else if(! set){
            $location.path('/login');
        } else {
            console.log('Fracaso logueo, campos incompletos');
            $scope.alertMessage = 'Por favor complete ambos campos';
        }
<<<<<<< HEAD
=======

    };

    var getUserInfo = function(id,token) {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://immense-taiga-71996.herokuapp.com/users/" + id,
            "method": "GET",
            "headers": {"content-type": "application/x-www-form-urlencoded"},
            "data": {"token": token}
        };
        console.log(settings);

        $.ajax(settings).done(function (response) {
            console.log(response);
            $sessionStorage.userInfo = response;
            $location.path('/login');
        });
    };


>>>>>>> remotes/origin/master

    };
}]);
