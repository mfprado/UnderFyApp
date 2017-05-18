'use strict';
/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the underfyApp
 */


var app = angular.module('underfyApp');
  

app.controller('MainCtrl', ['$scope','$location','$rootScope','$http',function ($scope,$location,$rootScope,$http) { // note the added $http depedency

    $scope.messageStatus = ''
    
    $scope.signin = {};
    
    $scope.user ={
        username: '',
        password: ''
    };
    
    $scope.submit = function () {
    
        if ( $scope.user.username && $scope.user.password ) {
     
            $scope.messageStatus = ''
            $http.get('../../api/token', 'aXJvbm1hbg==').then(function success(response){
                $scope.token = response.data;
                console.log(response.status);
                console.log("Logueo exitoso");
                console.log($scope.data);
                $location.path('/login');
                console.log($scope.user);
            
            }, function error(response){
                
                console.log("Autenticacion fracaso");
                alert('Por favor verifique que los datos ingresados sean correctos');
                $scope.messageStatus = 'Por favor verifique que los datos ingresados sean correctos' 
            });


        } else {
            console.log('Fracaso Logueo, campos incompletos')
            alert('Por favor complete ambos campos');
            $scope.messageStatus = 'Por favor complete ambos campos'
        };

    }
}]);
