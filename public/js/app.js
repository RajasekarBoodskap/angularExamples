
(function () {

    var app = angular.module('app',['ngRoute']);

    app.config(['$logProvider', '$routeProvider', '$locationProvider', function ($logProvider, $routeProvider, $locationProvider) {

        console.log('app file');

        $logProvider.debugEnabled(true);
        //$locationProvider.hashPrefix('!');
        //$locationProvider.html5Mode(true);

        $routeProvider
            .when('/wash', {
                templateUrl: 'templates/washing.html',
                controller: 'washCtrl'
            })
            
            .otherwise({
                templateUrl: 'templates/washing.html',
                controller: 'washCtrl'
               
            });
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

