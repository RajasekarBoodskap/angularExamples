/**
 * Created by pallali on 4/7/16.
 */

(function () {
    angular.module('app')
        .factory('washService', washService);
    function washService($http, $log, $q, $timeout) {
        
     
        var API_PATH = "";
        $http.get('js/boodskap1.properties').then(function (response) {
            // console.log(response.data);
             console.log('a is ', response.data.api);
             API_BASE_PATH = response.data.api
          });

       console.log("enter login service module"); 

       return{

        loginOutCall: loginOutCall,
        searchByQuery: searchByQuery,
        insertRecord: insertRecord,
        updateRecord: updateRecord,
        deleteRecord: deleteRecord,
        washImage: washImage

        };

        function loginOutCall() {
            
            return $http({
                method : 'GET',
                url : API_BASE_PATH + "/domain/logout/" + API_TOKEN
            }).then(function (response) {
                  //  console.log("response:" +response.data);
                    return response.data;
                })
                .catch(function (response) {

                    $log.error('error retriving schools' +response.statusText);
                    $q.reject('error Retriving schools');
                })
            
        }

        function searchByQuery(id, type, data) {

            if(id){
                data['specId'] = id
            }
            data['type'] = type;
            
            return $http({
                url : API_BASE_PATH + "/elastic/search/query/" + API_TOKEN,
                data: JSON.stringify(data),
                
                method : 'POST'
            }).then(function (response) {
                   // console.log("response:" +response.data);
                    return response.data;
                })
                .catch(function (response) {

                    $log.error('error retriving schools' +response.statusText);
                    $q.reject('error Retriving schools');
                })
            
        }

        function insertRecord(id, recorddata) {
            //console.log(JSON.stringify(recorddata));
            return $http({
                url : API_BASE_PATH + "/record/insert/dynamic/" + API_TOKEN + '/' + id, 
                data: recorddata,
                headers: {
                    "Content-Type": "text/plain"
                },
                method : 'POST'
            }).then(function (response) {
                    //console.log("response:" +response.data);
                    return response.data;
                })
                .catch(function (response) {

                    $log.error('error retriving schools' +response.statusText);
                    $q.reject('error Retriving schools');
                })
            
        }

        function updateRecord(washid, recorddata, id) {
            //console.log(JSON.stringify(recorddata));
            return $http({
                url: API_BASE_PATH + "/record/insert/static/" + API_TOKEN + '/' + washid +'/'+id, 
                data: recorddata,
                headers: {
                    "Content-Type": "text/plain"
                },
                method : 'POST'
            }).then(function (response) {
                    //console.log("response:" +response.data);
                    return response.data;
                })
                .catch(function (response) {

                    $log.error('error retriving schools' +response.statusText);
                    $q.reject('error Retriving schools');
                })
            
        }

        function deleteRecord(washid,id) {
            //console.log(JSON.stringify(recorddata));
            return $http({
                url: API_BASE_PATH + "/record/delete/" + API_TOKEN + '/' + washid + '/' + id,
                headers: {
                    "Content-Type": "text/plain"
                },
                method : 'DELETE'
            }).then(function (response) {
                    //console.log("response:" +response.data);
                    return response.data;
                })
                .catch(function (response) {

                    $log.error('error retriving schools' +response.statusText);
                    $q.reject('error Retriving schools');
                })
            
        }

        function washImage(){

            //console.log(JSON.stringify(recorddata));
            return $http({
                url: API_BASE_PATH + "/files/public/download/f04d3b65-e196-4f4a-8b20-6ce909639a55",
                headers: {
                    "Content-Type": "text/plain"
                },
                method : 'GET'
            }).then(function (response) {
                    //console.log("response:" +response.data);
                    return response.data;
                })
                .catch(function (response) {

                    $log.error('error retriving schools' +response.statusText);
                    $q.reject('error Retriving schools');
                })

        }


        

    }

}());