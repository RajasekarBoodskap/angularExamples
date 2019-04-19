/**
 * Created by pallali on 4/7/16.
 */

(function () {
    angular.module('loginApp')
        .factory('loginservice', loginservice);
    function loginservice($http, $log, $q, $timeout) {
        
        var API_PATH = "";
        $http.get('js/boodskap1.properties').then(function (response) {
            // console.log(response.data);
             console.log('a is ', response.data.api);
             API_BASE_PATH = response.data.api
          });

       console.log("enter login service module"); 

       return{

            redirect: redirect

        };

        function redirect(email,password) {
            console.log(API_BASE_PATH);
            return $http({
                method : 'GET',
                url : API_BASE_PATH + "/domain/login/" + email + "/" + password
            }).then(function (response) {
                    console.log("response:" +response.data);
                    return response.data;
                })
                .catch(function (response) {

                    $log.error('error retriving schools' +response.statusText);
                    $q.reject('error Retriving schools');
                })
            
        }

    }

}());