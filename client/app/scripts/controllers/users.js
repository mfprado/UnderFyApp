'use strict';

angular.module('underfyApp').controller('UsersController', ['$scope','$sessionStorage','$window','$route',function ($scope,$sessionStorage,$window, $route) {

    $scope.users = $sessionStorage.users;

    $scope.selected = $scope.users[0];

    $scope.selectUser = function(user) {
        $scope.selected = user;
    };

    $scope.deleteUser = function () {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://immense-taiga-71996.herokuapp.com/users/" + $scope.selected.id ,
            "method": "DELETE",
            "headers": {"content-type": "application/x-www-form-urlencoded"},
            "data": {"token": $sessionStorage.userData.token},
            "success": $scope.updateUsers
        };

        console.log(settings);

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    };


    $scope.addUser= function (userName,password,email,firstName,lastName,country,images,birthdate) {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://immense-taiga-71996.herokuapp.com/users",
            "method": "POST",
            "headers": {"content-type": "application/x-www-form-urlencoded"},
            "data": {
                "token": $sessionStorage.userData.token,
                "userName": userName,
                "password": password,
                "email": email,
                "firstName" : firstName,
                "lastName" : lastName,
                "country" : country,
                "images": images,
                "birthdate" : birthdate
            },
            "success": $scope.updateUsers
        };

        console.log(settings);

        $.ajax(settings).done(function (response) {
            console.log(response);
        });

    };

    $scope.HandlePopupResult =  function(result) {
        $scope.addUser(result.userName,result.password,result.email,result.firstName,result.lastName,result.country,result.images,result.birthdate);
    };

    $scope.addUserWindow = function () {
        $window.open("../views/createUser.html", "Agregar Usuario", "width=550,height=500,left=10,top=150");
    };

    $scope.updateUsers = function () {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://immense-taiga-71996.herokuapp.com/users",
            "method": "GET",
            "headers": {"content-type": "application/x-www-form-urlencoded"},
            "data": {"token": $sessionStorage.userData.token}
        };

        console.log(settings);

        $.ajax(settings).done(function (response) {
            console.log(response);
            $scope.users = response.users;
            $route.reload()
        });

    }

}]);

