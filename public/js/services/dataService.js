/**
 * Created by pallali on 4/7/16.
 */

(function () {
    angular.module('app')
        .factory('dataService', dataService);
    function dataService($http, $log, $q, $timeout) {
        
        return{
            
            getAllSchools: getAllSchools,
            getAllClassrooms: getAllClassrooms,
            getAllActivities: getAllActivities,
            getClassroom: getClassroom,
            getMonthName: getMonthName
            
        };
        
        function getAllSchools() {

            return $http.get('/api/schools')
                .then(function (response) {
                    //console.log("response:" +response.data);
                    return response.data;
                })
                .catch(function (response) {

                    $log.error('error retriving schools' +response.statusText);
                    $q.reject('error Retriving schools');
                })
            
        }
        function getAllClassrooms() {
            
            return $http.get('/api/classrooms')
                .then(function (response) {

                    console.log(response.data);
                    return response.data;
                })
                .catch(function (response) {
                    
                    $log.error('error retriving classrooms:' +response.statusText);
                    $q.reject('error retriving classrooms:');
                })
            
        }
        function getAllActivities() {

            var deferred = $q.defer();

            $timeout(function() {

                $http.get('api/activities')
                    .then(function(response) {
                        deferred.resolve(response.data);
                    })
                    .catch(function(response) {
                        $log.error('Error retrieving activities: ' + response.statusText);
                        return $q.reject('Error retrieving activities.');
                    });

            }, 1000);

            return deferred.promise;

        }
        function getClassroom(id) {

            return $http.get('/api/classrooms/' +id)
                .then (function (response) {

                    console.log('data: ' +response.data);
                    return response.data;
            })
                .catch(function (response) {
                    $log.log('error retriving classroom details:' +response.statusText);
                    $q.reject('error retriving classroom detail');
                })

        }
        function getMonthName(month) {

            var monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];

            return monthNames[month - 1];
        }

        

    }

}());