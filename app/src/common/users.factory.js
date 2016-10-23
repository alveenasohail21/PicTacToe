/**
 * @ngdoc service
 * @name app.auth.auth
 * @description < description placeholder >
 */

(function(){
    'use strict';
    angular
        .module('app.auth')
        .factory('UsersFactory', UsersFactory);

    function UsersFactory($q, restFactory){
        /* Return Functions */

        const DefaultQueryParams = {
            from: 1,
            size: 10
        };
        return {
            getAllusers: getAllusers,
            userSearch: userSearch,
            updateUser: updateUser,
            userSearchByTime: userSearchByTime
        };

        function getAllusers(queryParams){
            globalLoader.show();
            //get all orders
            var deffered = $q.defer();
            var dataToAttachOnUrl = queryParams || DefaultQueryParams;
            restFactory.users.getAllusers(dataToAttachOnUrl).then(function(resp){
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
        function userSearch(queryParams, value){
            globalLoader.show();
            //get all orders
            var deffered = $q.defer();
            var dataToAttachOnUrl = queryParams || DefaultQueryParams;
            restFactory.users.userSearch(dataToAttachOnUrl, value).then(function(resp){
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
        function updateUser(id, value){
            globalLoader.show();
            //get all orders
            var deffered = $q.defer();
            restFactory.users.updateUser(id, value).then(function(resp){
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
        function userSearchByTime(queryParams){
            globalLoader.show();
            //get all orders
            var deffered = $q.defer();
            restFactory.users.userSearchByTime(queryParams).then(function(resp){
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
