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

    function MediaFactory($q, restFactory, Upload, $localStorage){
        /* Return Functions */

        const DefaultQueryParams = {
            from: 0,
            size: 10,
            all: false,
            type: 'none'
        };

        var _data={
            stickers: {},
            fonts: {},
            allMedia: {}
        };
        return {
            _data: _data,
            addMedia: addMedia,
            getMedia:getMedia,
            deleteMedia:deleteMedia
        };

        function addMedia(media){
            globalLoader.show();
            Upload.upload({
                url : 'http://localhost:8000/admin/media',
                headers: {
                    token :   'Bearer' + '{'+$localStorage["token"]+'}'
                },
                data :  media
            }).then(function(resp){
                console.log("response :: ",resp);
                if(resp.data.code == 0){
                    globalLoader.hide();
                }else {
                    globalLoader.hide();
                }
            });
        }

        function getMedia(from, size, all, type){
            var queryParams={
                from: from || DefaultQueryParams.from,
                size: size || DefaultQueryParams.size,
                all: all || DefaultQueryParams.all,
                type: type || DefaultQueryParams.type
            };
            globalLoader.show();
            var deffered = $q.defer();
            restFactory.media.getMedia(queryParams).then(function(resp){
                if(resp.success){
                    globalLoader.hide();
                    if(type==='Stickers') _data.stickers=resp.data;
                    else if(type==='Fonts') _data.fonts=resp.data;
                    else if(type==='none') _data.allMedia=resp.data;

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

        function deleteMedia(id, type){
            globalLoader.show();
            var deffered = $q.defer();
            restFactory.media.deleteMedia(id).then(function(resp){
                if(resp.success){
                    globalLoader.hide();

                    if(type=="none") _data.allMedia.splice(findIndexById(id, _data.allMedia), 1);
                    else if(type=="Stickers") _data.stickers.splice(findIndexById(id, _data.stickers), 1);
                    else if(type=="Fonts") _data.fonts.splice(findIndexById(id, _data.fonts), 1);

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

        function findIndexById(id, dataArray){
            var foundIndex = null;
            dataArray.forEach(function(value, index){
                if(dataArray._id === id){
                    foundIndex = index;
                }
            });
            return foundIndex;
        }
    }
}());