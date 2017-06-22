angular.module('uploadApp',['ngStorage','lr.upload']).controller('uploadController',['$scope','$sessionStorage','upload',function ($scope, $sessionStorage, upload) {

    var token = $sessionStorage.userData.token;
    $scope.model = {};
    $scope.selectedFile = [];
    $scope.uploadProgress = 0;


    $scope.uploadFile = function (id) {
        //Envio del file al appsvr
        var file = $scope.selectedFile[0];
        $scope.upload = upload({

            url: "http//ec2-54-200-74-89.us-west-2.compute.amazonaws.com/appsvr/song?id_song=" + id,
            method: 'PUT',
            async: true,
            crossDomain: true,
            processData: false,
            contentType:false,
            mimeType: "multipart/form-data",
            headers: {
                "Authorization": "basic token"
            },
            data: file
        }).then(function (resp) {
            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
    };



    $scope.onFileSelect = function ($files) {
        $scope.uploadProgress = 0;
        $scope.selectedFile = $files;
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
        //Pedido id al shared
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
                    $scope.uploadFile(response.id);
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