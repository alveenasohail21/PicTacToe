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
        userSearchByTime: userSearchByTime
      },
      orders:{
        getAllOrders: getAllOrders,
        getOrdersStatus: getOrdersStatus,
        getOrderDetails: getOrderDetails,
        orderSearch: orderSearch,
        orderSearchByTime: orderSearchByTime,
        updateOrder:updateOrder
      },
      analytics: {
        annualEarning: annualEarning,
        adminToday: adminToday,
        earningByCity: earningByCity
      },
      media:{
        addMedia:addMedia,
        getMedia:getMedia
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
      return Admin.one('status').one('orders').get();
    }

    function getOrderDetails(id){
      return Admin.one('orders').one(id).get();
    }
//////////////////////////////////////////////////////////////////
    function userSearch(queryParams){
      return Admin.one('search').one('users').post(null, queryParams);
    }

    function updateUser(id, value){
      return Admin.one('users').one(id).customPUT({status: value});
    }
    function updateOrder(id, value){
      return Admin.one('orders').one(id).customPUT({status: value});
    }

    function userSearchByTime(queryParams){
      return Admin.one('searchbytime').one('users').post(null, queryParams);
    }

    function orderSearch(queryParams){
      return Admin.one('search').one('orders').post(null, queryParams);
    }

    function orderSearchByTime(queryParams){
      return Admin.one('searchbytime').one('orders').post(null, queryParams);
    }

    /////////////////////////////////////////////////////////
    function adminToday(){
      return Admin.one('today').get();
    }
    function annualEarning(){
      return Admin.one('earning').one('annualearning').get();
    }
    function earningByCity(){
      return Admin.one('earning').one('bycity').get();
    }
    function addMedia(file){
      return Admin.one('media').one('add').post(null, file);
    }
    function getMedia(){
      return Restangular.one('media').one('get').get();
    }
  }
}());
