/**
 * Created by pallali on 4/7/16.
 */

(function () {
    angular.module('app')
        .controller('schoolsController', ['dataService', schoolsController]);
    function schoolsController(dataService, notifier) {
        var vm = this;

        console.log('controller file');
        
        dataService.getAllSchools()
            .then(function (schools) {
                console.log(schools);
                
                vm.allSchools = schools;
            })
            .catch(showError);
        
        function showError(message) {

            notifier.error(message);

        }
            


    }

}());