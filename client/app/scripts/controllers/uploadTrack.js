angular.module('uploadApp',['ngStorage']).controller('uploadController',['$scope','$sessionStorage',function ($scope, $sessionStorage) {

    var token = $sessionStorage.userData.token;
    $scope.file = 'asd';


    $scope.albumId = $sessionStorage.trackInfo.albumId;
    $scope.artistsId = $sessionStorage.trackInfo.artistId;

    setFiles =function (files) {
        $scope.file = files[0];
    }

    console.log(token );

    $scope.upload = function (id) {
        var form = new FormData();
        form.append("song_file",$scope.file);
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "http://ec2-54-213-157-146.us-west-2.compute.amazonaws.com/appsvr/song?id_song="+id,
            "method": "PUT",
            "headers": {
                "Authorization": "basic token"
            },
            "processData": false,
            "contentType": undefined,
            "mimeType": "multipart/form-data",
            data: form,
            "success": $scope.success()
        };
        console.log(settings);
        console.log($scope.file);

        $.ajax(settings).done(function (response) {
            console.log(response);
            window.close();
        });
    };

    $scope.success = function() {
    };
    $scope.arrToInt = function (strArr){
        var intArr = [];
        for(i=0; i < strArr.length; i++)
            intArr.push(parseInt(strArr[i]));
        return intArr;
    };

    $scope.create = function() {
        if( tname.value && albumId.value && artistsIds.value){

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

    $scope.createInAlbum = function() {
        if( tname.value){

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
                    "artists": $scope.artistsId,
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