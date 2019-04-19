/**
 * Created by pallali on 4/7/16.
 */

(function () {
    angular.module('app')
        .controller('classroomController', ['dataService', classroomController]);
    
    function classroomController(dataService) {
        
        var vm=this;
        
        dataService.getAllClassrooms()
            .then(function (classrooms) {
                
                //console.log(classrooms);
                vm.allClassroom = classrooms;
            })
            .catch(showerror);
        
        function showerror(message) {
            
            notifier.error(message);
        }
    }
    
}());