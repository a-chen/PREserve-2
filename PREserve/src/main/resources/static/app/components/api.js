/**
 * API for making AJAX calls to PREserve endpoints
 */
angular.module('api').factory('apiFactory', function ($log, $http) {
    $log.debug('Started api');

    var api = {};

    api.getAllCustomers = function () {
        return $http({
            url: 'http://localhost:9001/customer',
            method: 'GET'
        })
            .then(
                function (successResponse) {
                    $log.debug('Retrieved all customers: ' + successResponse);
                    return successResponse.data;
                },
                function (errorResponse) {
                    $log.error('Failed to retrieve all customers: ' + errorResponse.status);
                }
            );
    }
});