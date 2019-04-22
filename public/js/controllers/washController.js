(function () {
    angular.module('app')
        .controller('washCtrl', ['washService','$scope','$http', washCtrl]);
    
    function washCtrl(washService,$scope,$http) {
        
        $scope.initail = function() {

            $scope.getwashData();
    
        };
        
        $scope.wash_details = 1000;
        $scope.queryParams = {
            "query": {
                "bool": {
                    "must": [{
                        match: { domainKey: DOMAIN_KEY }
                    }
                    ]
                }
            },
            "size": 1000,
            sort: {
    
            }
        };

        $scope.searchQuery = {
            "method": 'GET',
            "extraPath": "",
            "query": JSON.stringify($scope.queryParams),
            "params": []
        };
        console.log($scope.searchQuery);

        $scope.getwashData = function(){

            washService.searchByQuery($scope.wash_details, 'RECORD', $scope.searchQuery)
                .then(function(response) {
                   
                    $scope.resultData = JSON.parse(response.result);
                   // console.log($scope.resultData);
                   
                   //console.log($scope.resultData.hits.hits);

                    $scope.washData = $scope.resultData.hits.hits;
                    console.log($scope.washData);
                })
                .catch(function (response) {
                    console.log(response);
                })

        }
        
        $scope.addRecord = function(){

            $scope.bool_value = $scope.wash_power == "true" ? true : false;
            console.log($scope.bool_value);

            $scope.recordDetails = {
                washid: parseInt($scope.wash_id),
                washname: $scope.wash_name,
                power:  $scope.bool_value,
                stage: $scope.wash_stage,
                lint: parseInt($scope.wash_lint)
            }

            console.log( $scope.recordDetails);
            $scope.wash_recordData = JSON.stringify($scope.recordDetails);
            console.log( $scope.wash_recordData);
            washService.insertRecord($scope.wash_details, $scope.wash_recordData)
                .then(function(response) {
                   
                    $scope.insertData = response;
                   console.log($scope.insertData);

                   $scope.successMsg = "Record Created Successfully";

                    $('.bb').fadeToggle(200);
                    $('.message').toggleClass('comein');
                    $('.check').toggleClass('scaledown');
                    $('#go').fadeToggle();

                   $("#Adddetails").modal('hide');

                   $scope.wash_id = "";
                   $scope.wash_name = "";
                   $scope.wash_power = "";
                   $scope.wash_stage = "";
                   $scope.wash_lint = "";

                   $scope.getwashData();

                })
                .catch(function (response) {
                    console.log(response);
                })

        }
        $scope.editRecord_data = function(id,washId,washName,washPower,washStage,washLint){

            console.log("editRecord_data");

            $scope.id = id;
            $scope.edit_id = washId;
            $scope.edit_name = washName;
            $scope.edit_power = washPower;
            $scope.edit_stage = washStage;
            $scope.edit_lint = washLint;

            console.log($scope.id);
            console.log($scope.edit_id);

        }

        $scope.editRecord = function(){

            $scope.edit_bool_value = $scope.edit_power == "true" ? true : false;
            console.log($scope.bool_value);

            $scope.edit_recordDetails = {
                washid: parseInt($scope.edit_id),
                washname: $scope.edit_name,
                power:  $scope.edit_power,
                stage: $scope.edit_stage,
                lint: parseInt($scope.edit_lint)
            }

            console.log( $scope.edit_recordDetails);
            $scope.edit_recordData = JSON.stringify($scope.edit_recordDetails);
            console.log( $scope.edit_recordData);
            washService.updateRecord($scope.wash_details, $scope.edit_recordData, $scope.id)
                .then(function(response) {
                   
                    $scope.updateData = response;
                   console.log($scope.updateData);
                   $scope.successMsg = "Record Updated Successfully";

                    $('.bb').fadeToggle(200);
                    $('.message').toggleClass('comein');
                    $('.check').toggleClass('scaledown');
                    $('#go').fadeToggle();

                   $("#Editdetails").modal('hide');

                   $scope.getwashData();

                })
                .catch(function (response) {
                    console.log(response);
                })

        }

        $scope.deleteRecord_data = function(id){

            console.log("deleteRecord_data");

            $scope.id = id;
        
            console.log($scope.id);
            
            washService.deleteRecord($scope.wash_details, $scope.id)
                .then(function(response) {
                   
                    $scope.deleteData = response;
                   console.log($scope.deleteData);
                    
                   $scope.successMsg = "Record Deleted Successfully";

                    $('.bb').fadeToggle(200);
                    $('.message').toggleClass('comein');
                    $('.check').toggleClass('scaledown');
                    $('#go').fadeToggle();

                   $scope.getwashData();

                })
                .catch(function (response) {
                    console.log(response);
                })

        }

        $scope.washingData = function(id,wash_id,wash_name,wash_power,wash_stage,washlint){

            console.log("wash history");

            $scope.id = id;
            $scope.washing_id = wash_id;
            $scope.washing_name = wash_name;
            $scope.washing_power = wash_power;
            $scope.washing_stage = wash_stage;
            $scope.washing_lint = washlint;

            console.log($scope.id);
            console.log($scope.washing_id);
            console.log($scope.washing_name);
            console.log($scope.washing_power);
            console.log($scope.washing_stage);
            console.log($scope.washing_lint);
        }

        $scope.closePopup = function(){

            $('.bb').fadeToggle(200);
            $('.message').toggleClass('comein');
            $('.check').toggleClass('scaledown');
            $('#go').fadeToggle();

        }

        var init = function() {

            $scope.initail();
           
    
        };
        init();
        
    }
    
}());
