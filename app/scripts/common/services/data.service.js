'use strict';

angular.module('app.common')
    .factory('dataService', ['$http', function ($http) {
        var service = {
            get: get
        };
        return service;

        function get() {
            return $http.get('data.json');
        }
    }]);