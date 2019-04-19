
(function () {

    var app = angular.module('app',['ngRoute']);

    app.config(['$logProvider', '$routeProvider', '$locationProvider', function ($logProvider, $routeProvider, $locationProvider) {

        console.log('app file');

        $logProvider.debugEnabled(true);
        //$locationProvider.hashPrefix('!');
        //$locationProvider.html5Mode(true);

        $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html',
                controller: 'homeController',
                controllerAs: 'homes'
            })
            .when('/schools', {
                templateUrl: 'templates/schools.html',
                controller: 'schoolsController',
                controllerAs: 'schools'
            })
            .when('/classrooms', {
                templateUrl: 'templates/classroom.html',
                controller: 'classroomController',
                controllerAs: 'classrooms',
                caseInsensitiveMatch: true
            })
            .when('/activities',{
                templateUrl: 'templates/activities.html',
                controller: 'activitiesController',
                controllerAs: 'activities',
                resolve: {
                    activities: function (dataService) {
                        return dataService.getAllActivities();
                    }
                }
            })
            .when('/classrooms/:id',{
                template: "templates/classroomDetail.html",
                controller: 'classroomDetailController',
                controllerAs: 'classroom'
            })
            .when('/classrooms/:id/detail/:month?', {
                templateUrl: 'templates/classrum.html',
                controller: 'classroomDetailController',
                controllerAs: 'classroom'
            })
    }]);


    app.run(['$rootScope', '$log', function($rootScope, $log) {

        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {

            $log.debug('successfully changed routes');

            $log.debug(event);
            $log.debug(current);
            $log.debug(previous);

        });

        $rootScope.$on('$routeChangeError', function (event, current, previous, rejection) {

            $log.debug('error changing routes');

            $log.debug(event);
            $log.debug(current);
            $log.debug(previous);
            $log.debug(rejection);

        });

    }]);

}());

