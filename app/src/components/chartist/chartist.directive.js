/**
 * @ngdoc directive
 * @name app.components.directive:photo
 * @scope true
 * @param {object} test test object
 * @restrict E
 *
 * @description < description placeholder >
 *
 */

(function(){

    'use strict';

    angular
        .module('app.components')
        .directive('chartistDirective', chartistDirective);

    /* @ngInject */
    function chartistDirective(chartistFactory, $timeout){
        return {
            link: link,
            restrict: 'E',
            templateUrl: 'src/components/chartist/chartist.html',
            replace: true,
            scope:{
                chartMethod:'@',
                chartElement: '@',
                chartData: '='
            }
        };

        /////////////////////

        function link(scope, elem, attrs){
            //Variable Assignment
            var chartElement='.'+scope.chartElement;

            //Method Assignment
            scope.lineChart = lineChart;
            scope.barChart = barChart;
            console.log("in directive: ",scope.chartData);

            //Method Definitions
            function init() {
                $timeout(function () {
                    var fn = scope[scope.chartMethod];
                    if(typeof fn === 'function'){
                        fn();
                    }
                }, 100);
            }
            function lineChart(){
                chartistFactory.lineChart(chartElement, scope.chartData);
            }
            function barChart(){
                chartistFactory.barChart(chartElement, scope.chartData);
            }
            init();
        }
    }
}());
