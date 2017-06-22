var app = angular.module('uploadApp',['ngStorage']);

    app.directive('progressBar', [
        function () {
            return {
                link: function ($scope, el, attrs) {
                    $scope.$watch(attrs.progressBar, function (newValue) {
                        el.css('width', newValue.toString() + '%');
                    });
                }
            };
        }
    ]);




    app.controller('uploadController',['$scope','$sessionStorage',function ($scope, $sessionStorage) {

    var token = $sessionStorage.userData.token;

    console.log(token );

    $scope.upload = function (id) {
        var form = new FormData();
        form.append("upload.ashx",$scope.file);
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "http://ec2-54-200-74-89.us-west-2.compute.amazonaws.com/appsvr/song?id_song="+id,
            "method": "PUT",
            "headers": {
                "Authorization": "basic token"
            },
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": form,
            "success": $scope.success()
        };
        console.log(settings);

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    };

    $scope.success = function() {
//                window.close();
    };
    $scope.arrToInt = function (strArr){
        var intArr = [];
        for(i=0; i < strArr.length; i++)
            intArr.push(parseInt(strArr[i]));
        return intArr;
    };

    $scope.create = function() {
        if( tname.value && albumId.value && artistsIds.value && file){

            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://immense-taiga-71996.herokuapp.com/tracks",
                "method": "POST",
                "headers": {
                    "content-type": "application/x-www-form-urlencoded"
                },
                "data": {
                    "token": token,
                    "albumId": $scope.albumId,
                    "artists": $scope.arrToInt($scope.artistsIds.split(',')),
                    "name": $scope.trackName
                },
                "success" : function (response) {
                    console.log(response);
                    $scope.upload(response.id);
                }
            };
            console.log(settings);

            $.ajax(settings).done(function (response) {
                console.log(response);

            });
        }
        else {
            alert("Complete todos los campos");
        }
    }
}]);