'use strict';

angular.module('app.home')
    .controller('HomeController', ['dataService', function (dataService) {
        var vm = this;
        vm.results = [];
        vm.searhTerm = undefined;
        init();

        function init() {
            vm.loading = true;
            dataService.get().then(function (response) {
                vm.results = response.data;
                vm.loading = false;
            });
        }
    }]);