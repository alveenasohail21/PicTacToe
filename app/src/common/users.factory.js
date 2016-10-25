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

            var _data={
                users: []
            };
            const DefaultQueryParams = {
                from: 1,
                size: 10
            };
            const DefaultTimeParams={
                from: '2016-10-03',
                to: '2016-10-04'
            };
            const DefaultSearchParams={
                skip: 1,
                limit: 10,
                value: 'test'
            };
            return {
                _data: _data,
                getAllusers: getAllusers,
                userSearch: userSearch,
                updateUser: updateUser,
                userSearchByTime: userSearchByTime
            };

            function getAllusers(skip, limit){
                globalLoader.show();
                var queryParams={
                    skip: skip || DefaultSearchParams.skip,
                    limit: limit || DefaultSearchParams.limit
                };
                var deffered = $q.defer();
                restFactory.users.getAllusers(queryParams).then(function(resp){
                    if(resp.success){
                        globalLoader.hide();
                        _data.users=resp.data;
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

            function userSearch(value, skip, limit){
                //search user by any field
                globalLoader.show();
                var queryParams={
                    skip: skip || DefaultSearchParams.skip,
                    limit: limit || DefaultSearchParams.limit,
                    value: value || DefaultSearchParams.value
                };
                var deffered = $q.defer();
                restFactory.users.userSearch(queryParams).then(function(resp){
                    if(resp.success){
                        globalLoader.hide();
                        console.log(resp.data);
                        _data.users.users=resp.data.users;
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
                        console.log(resp);
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

            function userSearchByTime(from , to){
                globalLoader.show();
                var queryParams={
                    from: from || DefaultTimeParams.from,
                    to: to || DefaultTimeParams.to
                };
                var deffered = $q.defer();
                restFactory.users.userSearchByTime(queryParams).then(function(resp){
                    if(resp.success){
                        globalLoader.hide();
                        // alertFactory.success(null, resp.message);

                        _data.users.users=resp.data;
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
