// The app.module.js file will handle the setup of your app, load in AngularJS dependencies and so on

// load modules into main module
angular.module('app', ['delegate', 'api']);

// declare additional modules
angular.module('delegate', []);
angular.module('api', []);

// customer controller
angular.module('app').controller(
    'customerController', function customerController($scope, $http, $log) {

    // $scope.customers = delegateFactory.getAllCustomers();

        $http({
            url: 'http://localhost:9001/customerService/customer/',
            method: 'GET'
        })
            .then(
                function (successResponse) {
                    $log.debug('Retrieved all customers: ');
                    $log.debug(successResponse.data);
                    $scope.customers = successResponse.data;
                },
                function (errorResponse) {
                    $log.error('Failed to retrieve all customers: ' + errorResponse.status);
                }
            );
    /*$scope.customers = [
        {
            firstName: 'John',
            lastName: 'Wick'
        }, {
            firstName: 'Jason',
            lastName: 'Bourne'
        }, {
            firstName: 'James',
            lastName: 'Bond'
        }
    ];*/
});
