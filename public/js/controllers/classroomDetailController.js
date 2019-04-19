/**
 * Created by pallali on 6/7/16.
 */

//write route params code here

(function () {
    angular.module('app')
        .controller('classroomDetailController', ['dataService', '$routeParams', classroomDetailController]);
    function classroomDetailController(dataService, $routeParams) {

        /*var vm = this;

        dataService.getClassroom($routeParams.id)
            .then(function (classroom) {
                console.log('classroom: ' +classroom)
                vm.currentClassroom = classroom;
            })
            .catch(showError)
        function showError(message) {
            notifier.error(message);

        }*/
        var vm = this;

        vm.month = $routeParams.month;

        dataService.getClassroom($routeParams.id)
            .then(function (classroom) {
                vm.currentClassroom = classroom;

                if ($routeParams.month) {
                    if (classroom.activities.length > 0) {
                        vm.timePeriod = dataService.getMonthName($routeParams.month);
                    }
                    else {
                        vm.timePeriod = 'No activities this month';
                    }
                }
                else {
                    vm.timePeriod = 'All activities';
                }

            })
            .catch(showError);

        function showError(message) {
            notifier.error(message);
        }


    }
    
}());


// write state params code here

/*
(function () {
    angular.module('app')
        .controller('classroomDetailController', ['dataService', '$routeParams', '$stateParams', classroomDetailController]);
    function classroomDetailController(dataService, $routeParams, $stateParams) {

        /!*var vm = this;

         dataService.getClassroom($routeParams.id)
         .then(function (classroom) {
         console.log('classroom: ' +classroom)
         vm.currentClassroom = classroom;
         })
         .catch(showError)
         function showError(message) {
         notifier.error(message);

         }*!/
        var vm = this;

        vm.month = $stateParams.month;
        
        vm.message = $stateParams.classroomMessage;

        dataService.getClassroom($stateParams.id)
            .then(function (classroom) {
                vm.currentClassroom = classroom;

                if ($stateParams.month) {
                    if (classroom.activities.length > 0) {
                        vm.timePeriod = dataService.getMonthName($stateParams.month);
                    }
                    else {
                        vm.timePeriod = 'No activities this month';
                    }
                }
                else {
                    vm.timePeriod = 'All activities';
                }

            })
            .catch(showError);

        function showError(message) {
            notifier.error(message);
        }


    }

}());*/
