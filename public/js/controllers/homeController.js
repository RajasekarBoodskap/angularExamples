/**
 * Created by pallali on 4/7/16.
 */

(function () {

    angular.module('app')
        .controller('homeController', ['dataService', '$route', '$log', homeController]);

    function homeController(dataService, $route, $log) {

        var vm = this;

        vm.message = 'Welcome to Sathyavedu schools !';

        vm.refresh = function () {
            $log.debug($route.current);
            $log.debug($route.routes);
            $route.reload();

            //State Reload

            //$state.reload();
        };



        dataService.getAllSchools()
            .then(function (schools) {
                vm.allSchools = schools;
                vm.schoolCount = schools.length;
            })
            .catch(showError);

        dataService.getAllClassrooms()
            .then(function (classrooms) {
                vm.allClassrooms = classrooms;
                vm.classroomCount = classrooms.length;
            })
            .catch(showError);
        
        dataService.getAllActivities()
            .then(function (activities) {
                vm.allActivities = activities;
                vm.activityCount  = activities.length;
                
            })

        function showError(message) {
            notifier.error(message);
        }
    }
}());