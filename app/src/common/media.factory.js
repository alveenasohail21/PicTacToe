/**
 * @ngdoc service
 * @name app.auth.auth
 * @description < description placeholder >
 */

(function(){
    'use strict';
    angular
        .module('app.auth')
        .factory('MediaFactory', MediaFactory);

    function MediaFactory($q, restFactory){
        /* Return Functions */

        const DefaultQueryParams = {
            from: 0,
            size: 10,
            all: true
        };

        return {
            addMedia: addMedia,
            getMedia:getMedia
        };

        function addMedia(file){
            globalLoader.show();
            var deffered = $q.defer();
            restFactory.media.addMedia(file).then(function(resp){
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

        function getMedia(from, size, all){
            var queryParams={
                from: from || DefaultQueryParams.from,
                size: size || DefaultQueryParams.size,
                all: all || DefaultQueryParams.all
            };

            globalLoader.show();
            var deffered = $q.defer();
            restFactory.media.getMedia(queryParams).then(function(resp){
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
