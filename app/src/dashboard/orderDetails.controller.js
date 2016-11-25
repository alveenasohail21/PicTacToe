/**
 * @ngdoc controller
 * @name app.layouts.controller:Layouts
 * @description < description placeholder >
 */

(function(){

  'use strict';

  angular
    .module('app.dashboard')
    .controller('orderDetailsCtrl', orderDetailsCtrl);

  /* @ngInject */
  function orderDetailsCtrl(r_details, OrdersFactory, alertFactory, designTool){
    var vm = this;

    vm.orderItems=r_details.orderDetails;
    vm.orders=r_details.orders[0];

    vm.getItemDetails = getItemDetails;
    vm.downloadItem = downloadItem;

    // fabric canvas
    designTool.initializeTool('canvas');

    console.log("id: ", vm.orders);
    console.log("id: ", vm.orderItems);

    function init(){
      $(document).ready(function(){

        designTool.onDOMLoad();
        // initialize zoom slider
        designTool.initializeZoomSlider("#ex4");
        // update image studio .element css
        designTool.updateImageEditorSize();
      });
    }

    function getItemDetails(itemId){
      var orderId = vm.orders.orderId;

      OrdersFactory.getItemDetails(orderId, itemId)
        .then(function(resp){

          alertFactory.success('Please wait!', 'High resolution product is generating...', true);

          resp = updateItemSizeDetails(resp);
          
          designTool.resetTool();
          
          if(resp.canvasJSON){
            console.log('loading canvasJSON');
            designTool.loadFromJSON(resp.canvasJSON, null, function(loadedImage){
              // TODO: if require any thing
              console.log("removing alert 1");
              alertFactory.removeAlert(0, true);
            })
          }
          else{
            console.log('loading normal image');
            designTool.loadBkgImage(resp, {currentFilter: 'normal'}, function(loadedImage){
              console.log("removing alert 2");
              alertFactory.removeAlert(0, true);
            });
          }

          console.log('in ctrl', resp);
        })

    }

    function downloadItem(){
      designTool.downloadCanvas(false);
    }

    function updateItemSizeDetails(item){
      item.canvasSizeDetails = designTool.findItemSizeDetails(item);
      // convert url as well
      // items.url = convertUrl(items[i]);
      return item;
    }

    init();

  }

}());
