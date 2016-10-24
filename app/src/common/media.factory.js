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

        function getMedia(){
            globalLoader.show();
            var deffered = $q.defer();
            restFactory.media.getMedia().then(function(resp){
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
