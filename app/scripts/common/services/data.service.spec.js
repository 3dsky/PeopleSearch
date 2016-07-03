'use strict';

describe('dataService test - ', function () {
    var service,
        $http;

    beforeEach(module('app.common'));
    beforeEach(function () {
        $http = {
            get: jasmine.createSpy('get')
        };
    });

    beforeEach(module(function ($provide) {
        $provide.value('$http', $http);
    }));

    beforeEach(inject(function ($injector) {
        service = $injector.get('dataService');
    }));

    it('test for dataService to be defined', function () {
        expect(service).toBeDefined();
    });

    it('test for get function', function () {
        service.get();
        expect($http.get).toHaveBeenCalledWith('data.json');
    });
});
