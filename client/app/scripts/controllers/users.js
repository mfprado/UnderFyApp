'use strict';

angular.module('underfyApp').controller('UsersController', ['$scope','$sessionStorage','$window','$route','Requester',function ($scope,$sessionStorage,$window, $route, Requester) {

    $scope.users = $sessionStorage.users;
    $scope.selected = $scope.users[0];

    $scope.selectUser = function(user) {
        $scope.selected = user;
    };

    $scope.deleteUser = function () {
        Requester.deleteUser($scope.selected.id);
        $scope.updateUsers();
    };


    $scope.addUser= function (userName,password,email,firstName,lastName,country,images,birthdate) {
        Requester.addUser(userName,password,email,firstName,lastName,country,images,birthdate);
        $scope.updateUsers();
    };

    $scope.HandlePopupResult =  function(result) {
        $scope.addUser(result.userName,result.password,result.email,result.firstName,result.lastName,result.country,result.images,result.birthdate);
    };

    $scope.addUserWindow = function () {
        $window.open("../views/createUser.html", "Agregar Usuario", "width=550,height=600,left=10,top=150");
    };

    $scope.updateUsers = function () {
        Requester.getUsers();
        $scope.users = $sessionStorage.users;
        $scope.selected = $scope.users[0];
    };
}]);

