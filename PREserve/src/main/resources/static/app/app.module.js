// The app.module.js file will handle the setup of your app, load in AngularJS dependencies and so on

/*// load modules into main module
 angular.module('app', ['delegate', 'api']);

 // declare additional modules
 angular.module('delegate', []);
 angular.module('api', []);*/

// customer controller
angular.module('app', ['api'])
    .controller('CustomerController',
        function CustomerController($scope, $log, apiFactory) {

            $log.debug('Starting CustomerController');

            // makes call, then calls .then() to manipulate data after promise object is returned
            apiFactory.getAllCustomers()
                .then(function (data) {
                    $log.debug('Promised data');
                    $log.debug(data);
                    $scope.customers = data;
                });
        });