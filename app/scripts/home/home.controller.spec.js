'use strict';

describe('HomeController test - ', function () {
    var homeController,
        $scope,
        dataService,
        $q,
        $controller;

    var initController = function() {
        homeController = $controller('HomeController', {
            $scope: $scope
        });
    };
    beforeEach(module('app.home','app.common'));
    beforeEach(inject(function ($injector) {
            $controller = $injector.get('$controller');
            dataService = $injector.get('dataService');
            $q = $injector.get('$q');
            $scope = $injector.get('$rootScope').$new();
    }));

    it('test for HomeController to be defined', function () {
        initController();
        expect(homeController).toBeDefined();
    });

    it('test for init function', function () {
        var response = {
            data:[]
        };
        spyOn(dataService,'get').and.returnValue($q.when(response));
        initController();
        $scope.$apply();
        expect(homeController.loading).toBe(false);
        expect(homeController.results).toBe(response.data);
    });
});
