'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */


angular.module('underfyApp') // make sure this is set to whatever it is in your client/scripts/app.js
  .controller('MainCtrl', function ($scope, $http, $location) { // note the added $http depedency
    
    // // Here we're creating some local references
    // // so that we don't have to type $scope every
    // // damn time
    // var user,
    //     signup;

    // // Here we're creating a scope for our Signup page.
    // // This will hold our data and methods for this page.
    // $scope.signup = signup = {};

    // // In our signup.html, we'll be using the ng-model
    // // attribute to populate this object.
    // signup.user = user = {};

    // // This is our method that will post to our server.
    // signup.submit = function () {
      
    //   // make sure all fields are filled out...
    //   // aren't you glad you're not typing out
    //   // $scope.signup.user.firstname everytime now??
    //   if ( user.username && user.password ) {
    //     // to be filled in on success
       
    //     var request = $http.get('/token', 'aXJvbm1hbg==');
    //     // Just so we can confirm that the bindings are working
    //     console.log(user);
    //     // we'll come back to here and fill in more when ready
    //     request.success(function (data) {
    //         console.log("Logueo exitoso");
    //         $locationProvider.url('login');
    //     }


    //   } else {

    //     alert('Please fill out all form fields.');
    //   }

    
    //   // Just so we can confirm that the bindings are working
    //   console.log(user);


    //   request.error(function (data) {
    //     console.log("Logueo fracaso");
    //   });

    // };
    
  });
