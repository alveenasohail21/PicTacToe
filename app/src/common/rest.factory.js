/**
 * @ngdoc service
 * @name app.common.rest
 * @description < description placeholder >
 */

(function(){

  'use strict';

  angular
    .module('app.common')
    .factory('restFactory', restFactory);

  /* @ngInject */
  function restFactory(Restangular, $localStorage){

    /* Rest Objects */
    var Admin= Restangular.all('admin');

    /* Return Functions */
    return {
      admin:{

      },
      users:{
        getAllusers: getAllusers,
        updateUser: updateUser,
        userSearch: userSearch,
        adminToday: adminToday,
        userSearchByTime: userSearchByTime
      },
      orders:{
        getAllOrders: getAllOrders,
        getOrdersStatus: getOrdersStatus,
        getOrderDetails: getOrderDetails,
        orderSearch: orderSearch,
        orderSearchByTime: orderSearchByTime
      },
      oneUrl: oneUrl
    };

    /* Define Fuctions */

    function oneUrl(url){
      return Restangular.oneUrl('dummy', url).get({}, {
        'Content-Type': 'application/x-www-form-urlencoded'
      });
    }
    function getAllusers(queryParams){
      return Admin.one('users').get(queryParams);
    }

    function getAllOrders(queryParams){
      return Admin.one('orders').get(queryParams);
    }

    function getOrdersStatus(){
      return Admin.one('orders').one('status').get();
    }

    function getOrderDetails(id){
      return Admin.one('orders').one(id).get();
    }
//////////////////////////////////////////////////////////////////
    function userSearch(queryParams){
      return Admin.one('users').one('search').post(null, queryParams);
    }

    function updateUser(id, value){
      return Admin.one('users').one(id).customPUT({status: value});
    }

    function userSearchByTime(queryParams){
      return Admin.one('users').one('searchbytime').post(null, queryParams);
    }

    function orderSearch(queryParams){
      return Admin.one('orders').one('search').post(null, queryParams);
    }

    function orderSearchByTime(queryParams){
      return Admin.one('orders').one('searchbytime').post(null, queryParams);
    }

    function adminToday(){
      return Admin.one('today').get();
    }
  }
}());
