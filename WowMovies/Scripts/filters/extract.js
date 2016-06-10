(function (app) {
    'use strict';

    

    function extract() {
        return function (value, turnedOn, wordwise, max, tail) {
            if (!value) return '';
            if (!turnedOn) return value;
            max = parseInt(max, 10);
            if (!max) return value;
            if (value.length <= max) return value;

            value = value.split(/\s+/).slice(0, max).join(" ");

            return value + (tail || ' …');
        };
    };

    app.filter('extract', extract);

})(angular.module('wowMoviesApp'));