
/**
 * @ngdoc service
 * @name app.common.alert
 * @description < description placeholder >
 */

(function(){
    'use strict';
    angular
        .module('app.common')
        .factory('chartistFactory', chartistFactory);

    function chartistFactory($rootScope, $timeout){
        /* Variables */

        /* Return Methods */
        return {
            lineChart: lineChart,
            barChart: barChart
        };

        /* Define Methods */
        function lineChart(element, data, options) {
            new Chartist.Line(element, data);
        }
        function barChart(element, data, options) {
            new Chartist.Bar(element, data);
        }
    }

}());
