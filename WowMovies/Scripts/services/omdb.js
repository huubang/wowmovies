(function (app) {
    'use strict';

    function omdbService($http) {
        function search(title, year, success, failure) {
            return $http.get('http://www.omdbapi.com/?s=' + title + '&y=' + year + '&r=json')
                .then(function (result) {
                    success(result.data);
                }, function (error) {
                    if (error.status == '401') {
                        // do some redirection
                    }
                    else if (failure != null) {
                        failure(error);
                    }
                });
        }

        function searchById(id, success, failure) {
            return $http.get('http://www.omdbapi.com/?i=' + id + '&plot=full&r=json')
                .then(function (result) {
                    success(result.data);
                }, function (error) {
                    if (error.status == '401') {
                        // do some redirection
                    }
                    else if (failure != null) {
                        failure(error);
                    }
                });
        }

        var service = {            
            search: search,
            searchById: searchById
        };

        

        return service;
    }

    app.factory('omdbService', omdbService);
    omdbService.$inject = ['$http'];

})(angular.module('wowMoviesApp'));