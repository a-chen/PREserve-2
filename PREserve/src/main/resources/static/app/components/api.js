/**
 * API for making AJAX calls to PREserve endpoints
 */

angular.module('api', [])
    .factory('apiFactory', function($http, $log) {

        $log.debug('Starting api');

        // create object to be returned
        var api = {};

       /* var sampleCustomers = [
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
            ]; */

        api.getAllCustomers = function () {
            return $http({
                url: 'http://localhost:9001/customerService/customer',
                method: 'GET'
            })
                .then(
                    function (successResponse) {
                        $log.debug('Retrieved all customers with code: ' + successResponse.status);
                        $log.debug(successResponse.data);
                        return successResponse.data;
                    },
                    function (errorResponse) {
                        $log.error('Failed to retrieve all customers with code: ' + errorResponse.status);
                        $log.error(errorResponse);
                    }
                );
        };

       // return object to call methods on
       return api;
    });