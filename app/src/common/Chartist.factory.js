
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
        var defaultData = {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            series: [
                [5, 2, 4, 2, 0]
            ]
        };
        /* Return Methods */
        return {
            lineChart: lineChart,
            barChart: barChart
        };

        /* Define Methods */
        function lineChart(element, rawData, options) {
            var data= rawData ? formatData(rawData) : defaultData;
            new Chartist.Line(element, data || defaultData);
        }
        function barChart(element, rawData, options) {
            var data= rawData ? formatData(rawData) : defaultData;
            new Chartist.Bar(element, data || defaultData);
        }

        function formatData(data){

        }
    }

}());
