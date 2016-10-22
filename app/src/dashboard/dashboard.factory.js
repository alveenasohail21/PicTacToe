/**
 * @ngdoc service
 * @name app.auth.auth
 * @description < description placeholder >
 */

(function(){
    'use strict';
    angular
        .module('app.auth')
        .factory('dashboardFactory', dashboardFactory);

    function dashboardFactory($q, restFactory){
        /* Return Functions */

        const DefaultQueryParams = {
            from: 1,
            size: 10
        };
        return {
            getAllusers: getAllusers,
            getAllOrders: getAllOrders,
            getOrdersStatus: getOrdersStatus
        };

        function getAllusers(queryParams){
            // globalLoader.show();
            //get all orders
            var deffered = $q.defer();
            var dataToAttachOnUrl = queryParams || DefaultQueryParams;
            restFactory.users.getAllusers(dataToAttachOnUrl).then(function(resp){
                if(resp.success){
                    // globalLoader.hide();
                    // alertFactory.success(null, resp.message);
                    deffered.resolve(resp.data);
                }
                else{
                    // globalLoader.hide();
                    // alertFactory.error(null, resp.message);
                    deffered.reject(resp);
                }
            }, function(err){
                // globalLoader.hide();
                deffered.reject(err);
            });
            return deffered.promise;
        }

        function getAllOrders(queryParams){
            // globalLoader.show();
            //get all orders
            var deffered = $q.defer();
            var dataToAttachOnUrl = queryParams || DefaultQueryParams;
            restFactory.users.getAllOrders(dataToAttachOnUrl).then(function(resp){
                if(resp.success){
                    // globalLoader.hide();
                    // alertFactory.success(null, resp.message);
                    deffered.resolve(resp.data);
                }
                else{
                    // globalLoader.hide();
                    // alertFactory.error(null, resp.message);
                    deffered.reject(resp);
                }
            }, function(err){
                // globalLoader.hide();
                deffered.reject(err);
            });
            return deffered.promise;
        }
        function getOrdersStatus(){
            // globalLoader.show();
            //get all orders
            var deffered = $q.defer();

            restFactory.users.getOrdersStatus().then(function(resp){
                if(resp.success){
                    // globalLoader.hide();
                    // alertFactory.success(null, resp.message);
                    deffered.resolve(resp.data);
                }
                else{
                    // globalLoader.hide();
                    // alertFactory.error(null, resp.message);
                    deffered.reject(resp);
                }
            }, function(err){
                // globalLoader.hide();
                deffered.reject(err);
            });
            return deffered.promise;
        }

        /* Define Fuctions */

    }

}());
