angular.module('delegate').factory('delegateFactory', function ($log, api) {
    $log.debug('Started delegate');

    var delegate = {};

    delegate.getAllCustomers = function () {
        return api.getAllCustomers();
    }
});