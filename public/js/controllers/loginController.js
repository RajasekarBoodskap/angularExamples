var loginApp = angular.module('loginApp', []);

loginApp.controller('loginCtrl', function($http, $scope, $rootScope, $window, $location, $element, loginservice) {
	
    console.log("enter logi module");

    $scope.login = function(){

        $scope.uname = $scope.username.toLowerCase();
        $scope.pwd = $scope.password;
        
        console.log($scope.uname);
        console.log($scope.pwd);

        loginservice.redirect($scope.uname,$scope.pwd)
        .then(function(response) {
            $scope.userdetails = response;
           console.log($scope.userdetails)

           window.location = '/home';

        })
        .catch(function (response) {
            console.log(response);
        })
    }
    
}

);
