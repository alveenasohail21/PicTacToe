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
            getAllusers: getAllusers
        };

        function getAllusers(queryParams){
            // GlobalLoader.show();
            //get all orders
            var deffered = $q.defer();
            var dataToAttachOnUrl = queryParams || DefaultQueryParams;
            restFactory.users.getAllusers(dataToAttachOnUrl).then(function(resp){
                if(resp.success){
                    // GlobalLoader.hide();
                    // alertFactory.success(null, resp.message);
                    deffered.resolve(resp.data);
                }
                else{
                    // GlobalLoader.hide();
                    // alertFactory.error(null, resp.message);
                    deffered.reject(resp);
                }
            }, function(err){
                // GlobalLoader.hide();
                deffered.reject(err);
            });
            return deffered.promise;
        }

        /* Define Fuctions */

    }

}());
