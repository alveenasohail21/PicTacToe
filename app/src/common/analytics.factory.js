/**
 * @ngdoc service
 * @name app.auth.auth
 * @description < description placeholder >
 */

(function(){
    'use strict';
    angular
        .module('app.auth')
        .factory('AnalyticsFactory', AnalyticsFactory);

    function AnalyticsFactory($q, restFactory){
        /* Return Functions */

        var _data={
            annualEarning: {},
            adminToday: {},
            earningByCity: {}
        };

        return {
            adminToday: adminToday,
            earningByCity: earningByCity,
            annualEarning: annualEarning,
            formatDataForChart: formatDataForChart,


        };

        function adminToday(){
            globalLoader.show();
            var deffered = $q.defer();
            restFactory.analytics.adminToday().then(function(resp){
                if(resp.success){
                    globalLoader.hide();
                    _data.adminToday=resp.data;
                    // alertFactory.success(null, resp.message);
                    deffered.resolve(resp.data);
                }
                else{
                    globalLoader.hide();
                    // alertFactory.error(null, resp.message);
                    deffered.reject(resp);
                }
            }, function(err){
                globalLoader.hide();
                deffered.reject(err);
            });
            return deffered.promise;
        }
        function annualEarning(){
            globalLoader.show();
            var deffered = $q.defer();
            restFactory.analytics.annualEarning().then(function(resp){
                if(resp.success){
                    globalLoader.hide();
                    _data.annualEarning=resp.data;
                    // alertFactory.success(null, resp.message);
                    deffered.resolve(resp.data);
                }
                else{
                    globalLoader.hide();
                    // alertFactory.error(null, resp.message);
                    deffered.reject(resp);
                }
            }, function(err){
                globalLoader.hide();
                deffered.reject(err);
            });
            return deffered.promise;
        }
        function earningByCity(){
            globalLoader.show();
            var deffered = $q.defer();
            restFactory.analytics.earningByCity().then(function(resp){
                if(resp.success){
                    globalLoader.hide();
                    _data.earningByCity=resp.data;
                    // alertFactory.success(null, resp.message);
                    deffered.resolve(resp.data);
                }
                else{
                    globalLoader.hide();
                    // alertFactory.error(null, resp.message);
                    deffered.reject(resp);
                }
            }, function(err){
                globalLoader.hide();
                deffered.reject(err);
            });
            return deffered.promise;
        }

        function formatDataForChart(rawObjectSelector, selector) {
            var chartistData={
                labels: [],
                series: []
            };
            var tempSeries=[];
            for(var i in _data[rawObjectSelector]){
                var dataObject=_data[rawObjectSelector][i];
                var label=dataObject[selector];
                if(selector=='month') label=moment().month(label-1).format('MMM');
                chartistData.labels.push(label);
                tempSeries.push(dataObject.total);
            }
            chartistData.series.push(tempSeries);
            return chartistData
        }
    }

}());
