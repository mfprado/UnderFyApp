'use strict';
/**
 * @ngdoc function
 * @name underfyApp.controller:MainCtrl
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

    var data = {
        mode: 'urlencoded',
        urlencoded:[{
                "key": "userName",
                "value": "",
                "type": "text",
                "enabled": true
        },{
                "key": "password",
                "value": "",
                "type": "text",
                "enabled": true
        }]
    }

    var req = {
        method: 'POST',
        url: "https://immense-taiga-71996.herokuapp.com/token",
        header: [{
                "key": "Content-Type",
                "value": "application/x-www-form-urlencoded",
                "description": ""
        }],
        body: data,
        description: ""
    }


    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://immense-taiga-71996.herokuapp.com/token",
        "method": "POST",
        "headers": {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache",
            "postman-token": "5f355eed-9fb9-3906-562f-08c36be6158e"
        },
        "data": {
            "userName": "ironman",
            "password": "pepperpots"
        }
    }



    
    $scope.submit = function () {

        $.ajax(settings).done(function (response) {
            console.log(response);
        });

        $location.path('/login');
        // $location.path('/about');
        // if ( $scope.user.userName && $scope.user.password ) {
        //     $scope.alertMessage = '';
        //     data.urlencoded[0].value = $scope.user.userName;
        //     data.urlencoded[1].value = $scope.user.password;
        //
        //     console.log('json enviado en el POST: '+JSON.stringify(req));
        //
        //     $http.post(JSON.stringify(req)).then(function success(response){
        //         console.log("Logueo exitoso");
        //         console.log(response);
        //         $scope.token = response.data;
        //         $location.path('/login');
        //
        //     }, function error(response){
        //         console.log("Autenticacion fracaso");
        //         console.log(response);
        //         $scope.alertMessage = 'username o password incorrecto'
        //     });
        //
        //
        // } else {
        //     console.log('Fracaso logueo, campos incompletos')
        //     $scope.alertMessage = 'Por favor complete ambos campos'
        // };

    }

    $scope.about = function (){
        $location.path('/about');
    }
}]);
