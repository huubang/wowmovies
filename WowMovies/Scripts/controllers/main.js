(function (app) {
    'use strict';

    
    
    function mainCtrl($scope, omdbService) {

        

        function displayMovie(id) {
            omdbService.searchById(id, function(result) {
                $scope.detailViewMovie = result;
                $scope.detailViewMovie.starRating = $scope.detailViewMovie.imdbRating / 2.0;
            });
            
        }

        function showFullPlot() {
            $scope.shortPlot = false;
        }

        function search() {
            omdbService.search($scope.searchParams.title, $scope.searchParams.year, function (result) {
                $scope.searchResult.movies = result.Search;
                $scope.searchResult.recordsCount = result.totalResults;
            });
        }

        $scope.title = 'WOW';

        $scope.searchParams = { title: '', year: '' };
        $scope.searchResult = {};

        $scope.detailViewMovie = null;
        $scope.shortPlot = true;
        $scope.sortField = 'Title';

        $scope.search = search;
        $scope.displayMovie = displayMovie;
        $scope.showFullPlot = showFullPlot;

    }

    app.controller('mainCtrl', mainCtrl);
    mainCtrl.$inject = ['$scope', 'omdbService'];

   
})(angular.module('wowMoviesApp'));