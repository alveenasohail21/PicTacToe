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
        /* Return Functions */

        const DefaultQueryParams = {
            from: 1,
            size: 10
        };
        return {
            getAllOrders: getAllOrders,
            getOrderDetails: getOrderDetails,
            getOrdersStatus: getOrdersStatus
        };



        function getAllOrders(queryParams){
            globalLoader.show();
            //get all orders
            var deffered = $q.defer();
            var dataToAttachOnUrl = queryParams || DefaultQueryParams;
            restFactory.orders.getAllOrders(dataToAttachOnUrl).then(function(resp){
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


        /* Define Fuctions */

    }

}());
