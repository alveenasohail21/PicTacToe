/**
 * @ngdoc service
 * @name app.auth.auth
 * @description < description placeholder >
 */

(function(){
    'use strict';
    angular
        .module('app.auth')
        .factory('OrdersFactory', OrdersFactory);

    function OrdersFactory($q, restFactory){
        var _data={
            orders: []
        };
        const DefaultQueryParams = {
            from: 1,
            size: 10
        };
        const DefaultTimeParams={
            from: '2016-10-22',
            to: '2016-10-23'
        };
        const DefaultSearchParams={
            skip: 1,
            limit: 10,
            value: undefined
        };
        /* Return Functions */
        return {
            _data: _data,
            getAllOrders: getAllOrders,
            getOrderDetails: getOrderDetails,
            getOrdersStatus: getOrdersStatus,
            orderSearchByTime: orderSearchByTime,
            orderSearch: orderSearch,
            updateOrder: updateOrder
        };
        /* Define Fuctions */

        function getAllOrders(skip, limit){
            globalLoader.show();
            var queryParams={
                skip: skip || DefaultSearchParams.skip,
                limit: limit || DefaultSearchParams.limit
            };
            var deffered = $q.defer();
            restFactory.orders.getAllOrders(queryParams).then(function(resp){
                if(resp.success){
                    _data.orders=resp.data;
                    globalLoader.hide();
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

        function getOrdersStatus(){
            globalLoader.show();
            //get all orders
            var deffered = $q.defer();

            restFactory.orders.getOrdersStatus().then(function(resp){
                if(resp.success){
                    globalLoader.hide();
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

        function getOrderDetails(id){
            globalLoader.show();
            //get all orders
            var deffered = $q.defer();
            restFactory.orders.getOrderDetails(id).then(function(resp){
                if(resp.success){
                    globalLoader.hide();

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

        function orderSearch(value, skip, limit){
            globalLoader.show();
            var queryParams={
                skip: skip || DefaultSearchParams.skip,
                limit: limit || DefaultSearchParams.limit,
                value: value || DefaultSearchParams.value
            };
            var deffered = $q.defer();
            restFactory.orders.orderSearch(queryParams).then(function(resp){
                if(resp.success){
                    globalLoader.hide();
                    _data.orders.orders=resp.data.orders;
                    _data.orders.count=resp.data.count;
                    // alertFactory.success(null, resp.message);
                    deffered.resolve(resp.data.orders);
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

        function orderSearchByTime(from, to){
            globalLoader.show();
            var queryParams={
                from: from || DefaultTimeParams.from,
                to: to || DefaultTimeParams.to
            };
            var deffered = $q.defer();
            restFactory.orders.orderSearchByTime(queryParams).then(function(resp){
                if(resp.success){
                    globalLoader.hide();
                    _data.orders.orders=resp.data;
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

        function updateOrder(id, value){
            globalLoader.show();
            //get all orders
            var deffered = $q.defer();
            restFactory.orders.updateOrder(id, value).then(function(resp){
                if(resp.success){
                    globalLoader.hide();
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
    }
}());
