angular.module('uploadApp',['ngStorage','lr.upload']).controller('uploadController',['$scope','$sessionStorage','upload','$http',function ($scope, $sessionStorage, upload,$http) {

    var token = $sessionStorage.userData.token;
    $scope.model = {};
    $scope.selectedFile = [];
    $scope.uploadProgress = 0;

    $scope.uploadFile = function(id,file) {
        sendToServer(id,file);
    };

    $scope.progressBar;

    function ProgressBar(file) {
        this.progress = 0;
        this.file = file;
        this.status = 'Uploading'; // Uploading, Completado, Error
        this.error = '';

        // Methods
        this.setProgress = function(progress) {
            this.progress = progress;
        };

        this.setCompletado = function() {
            this.status = 'Completado';
        };

        this.setError = function(error) {
            this.status = 'Error';
            this.error = error;
        };

        this.estaCompletado = function() {
            return (this.status == 'Completado');
        };

        this.hayError = function() {
            return (this.status == 'Error');
        };
    }


    // $scope.uploadFile = function (id) {
    //     //Envio del file al appsvr
    //     var file = $scope.selectedFile[0];
    //     $scope.upload = upload({
    //
    //         url: "//ec2-54-200-74-89.us-west-2.compute.amazonaws.com/appsvr/song?id_song=" + id,
    //         method: 'PUT',
    //         async: true,
    //         crossDomain: true,
    //         processData: false,
    //         contentType:false,
    //         mimeType: "multipart/form-data",
    //         headers: {
    //             "Authorization": "basic token"
    //         },
    //         data: file
    //     }).then(function (resp) {
    //         console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
    //     }, function (resp) {
    //         console.log('Error status: ' + resp.status);
    //     }, function (evt) {
    //         var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
    //         console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
    //     });
    // };

    function checkStatus(file, event) {
        var params = {file: file};
        var progress = Math.floor(event.loaded / event.totalSize * 100);
        $scope.progressBar.setProgress(progress);
        $scope.progressBar.file = params.file;
    }

    function sendToServer(id,file) {

        $scope.progressBar = new ProgressBar(file);
        $scope.uploading = true;

        var fd = new FormData();
        fd.append("data", file);

        var config = {
            uploadEventHandlers: {
                progress: function (event) {
                    checkStatus(file, event);
                }
            },
            transformRequest: angular.identity,
            async: true,
            crossDomain: true,
            processData: false,
            contentType:false,
            mimeType: "multipart/form-data",
            headers: {
                "x-requested-with" : "XMLHttpRequest",
                "Authorization": "basic token"
            }
        };

        // $http.put("http://ec2-54-200-74-89.us-west-2.compute.amazonaws.com/appsvr/song?id_song=" + id, fd, config).success(function (response) {
        $http.put("http://latorregabriel.com/imghosting/upload.php", fd, config).success(function (response) {
            // TODO procesar respuesta api/siniestros/files/upload
            console.log("ok upload file");

            $scope.progressBar.setProgress(100);
            $scope.progressBar.setCompletado();
            $scope.uploading = false;
        }).error(function (error) {
            $scope.progressBar.setError(error.error);
            console.error("error upload file");
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

    save = function (file) {
        $scope.file = file;
    };

    $scope.create = function() {
        //Pedido id al shared
        if( tname.value && albumId.value && artistsIds.value && $scope.file){

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
                    $scope.uploadFile(response.id,$scope.file);
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
