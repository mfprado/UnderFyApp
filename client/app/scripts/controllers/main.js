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

    var urlSharedServer="https://immense-taiga-71996.herokuapp.com/token";

    $scope.alertMessage = '';
    $scope.signin = {};
    $scope.user ={
        userName: '',
        password: '',
    };
    
    $scope.submit = function () {
    
        if ( $scope.user.userName && $scope.user.password ) {
            console.log($scope.user);
            $scope.alertMessage = '';
            console.log(JSON.stringify($scope.user));

            $http.post(urlSharedServer, JSON.stringify($scope.user),{'Content-Type': 'application/x-www-form-urlencoded'}).then(function success(response){
                $scope.token = response.data;
                console.log(response);
                console.log("Logueo exitoso");
                $location.path('/login');
            
            }, function error(response){
                
                console.log("Autenticacion fracaso");
                // alert('Por favor verifique que los datos ingresados sean correctos');
                $scope.alertMessage = 'Por favor verifique que los datos ingresados sean correctos' 
            });


        } else {
            console.log('Fracaso logueo, campos incompletos')
            $scope.alertMessage = 'Por favor complete ambos campos'
        };

    }
}]);
