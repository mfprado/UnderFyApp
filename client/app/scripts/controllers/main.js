'use strict';
/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the underfyApp
 */


var app = angular.module('underfyApp');
  

app.controller('MainCtrl', ['$scope','$location','$rootScope','$http',function ($scope,$location,$rootScope,$http) { 

    $scope.alertMessage = '';
    $scope.user ={
        userName: '',
        password: '',
    };


    // var request = require("request");

// var options = { method: 'POST',
//   url: 'https://immense-taiga-71996.herokuapp.com/token',
//   headers: 
//    { 'postman-token': 'f7c3ad15-4efc-ba83-1ff4-9c96451ac838',
//      'cache-control': 'no-cache',
//      'content-type': 'application/x-www-form-urlencoded' },
//   form: { userName: 'ironman', password: 'pepperpots' } };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });


    var data = {
        async: true,
        crossDomain: true,
        method: 'POST',
        url: "https://immense-taiga-71996.herokuapp.com/token",
        headers: {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache",
        },
        data: {
            "userName": "",
            "password": ""
        }
    };
    
    $scope.submit = function () {
    
        if ( $scope.user.userName && $scope.user.password ) {
            $scope.alertMessage = ''; 
            data.data["userName"] = $scope.user.userName;
            data.data["password"] = $scope.user.password;

            console.log('json enviado en el POST: '+JSON.stringify(data));

            $http(data).then(function success(response){
                console.log("Logueo exitoso");
                console.log(response);
                $scope.token = response.data;
                $location.path('/login');
            
            }, function error(response){
                console.log("Autenticacion fracaso");
                console.log(response);
                $scope.alertMessage = 'username o password incorrecto' 
            });


        } else {
            console.log('Fracaso logueo, campos incompletos')
            $scope.alertMessage = 'Por favor complete ambos campos'
        };

    }
}]);
