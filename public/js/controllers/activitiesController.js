/**
 * Created by pallali on 5/7/16.
 */

/*
(function () {
    angular.module('app')
        .controller('activitiesController', ['dataService', activitiesController]);
    function activitiesController(dataService) {
        
        var vm = this;
        
        dataService.getAllActivities()
            .then(function (activities) {
                
                vm.allActivities = activities;
            })
            .catch(showError)
        function showError(message) {
            
            notifier.error(message);
        }
        
    }
}());
*/

// write route params code

(function () {

    angular.module('app')
        .controller('activitiesController', ['dataService', '$location', activitiesController]);

    function activitiesController(dataService, $location) {

        var vm = this;

        vm.selectedMonth = 1; // default to January

        //vm.allActivities = activities;

        vm.search = function () {
            var classroom_detail_url = '/classrooms/' + vm.selectedClassroom.id + '/detail/' + vm.selectedMonth;
            $location.url(classroom_detail_url);
        };


        dataService.getAllClassrooms()
            .then(function(classrooms) {
                vm.allClassrooms = classrooms;
                vm.selectedClassroom = classrooms[0];
            })
            .catch(showError);

        dataService.getAllActivities()
            .then(function(activities) {
                vm.allActivities = activities;
            })
            .catch(showError);
        function showError(message) {
            notifier.error(message);
        }

    }

}());


// write state param code


/*
(function () {

    angular.module('app')
        .controller('activitiesController', ['dataService', '$location', '$state', activitiesController]);

    function activitiesController(dataService, $location, $state) {

        var vm = this;

        vm.selectedMonth = 1; // default to January

        //vm.allActivities = activities;

        vm.search = function () {

            $state.go('classroom_parent.classroom_detail', {id: vm.selectedClassroom.id,  month:vm.selectedMonth } )

            /!*var classroom_detail_url = '/classrooms/' + vm.selectedClassroom.id + '/detail/' + vm.selectedMonth;
            $location.url(classroom_detail_url);*!/
        };


        dataService.getAllClassrooms()
            .then(function(classrooms) {
                vm.allClassrooms = classrooms;
                vm.selectedClassroom = classrooms[0];
            })
            .catch(showError);

        dataService.getAllActivities()
            .then(function(activities) {
                vm.allActivities = activities;
            })
            .catch(showError);
        function showError(message) {
            notifier.error(message);
        }

    }

}());*/
