/**
 * @ngdoc directive
 * @name app.dashboard.directive:lightSlider
 * @scope true
 * @param {object} test test object
 * @restrict E
 *
 * @description < description placeholder >
 *
 */

(function(){

  'use strict';

  angular
    .module('app.dashboard')
    .directive('pttTexts', pttTexts);

  /* @ngInject */
  function pttTexts($timeout, restFactory, $rootScope){

    // would be get from server, only active texts will be shown
    var texts =[];

    var defaultQuery = {
      type : 'fonts',
      from : 0,
      size : 20,
      all : false
    };
    var totalCount;


    return {
      restrict: 'E',
      link: link,
      // templateUrl: 'src/dashboard/layouts/texts.html',
      scope: {
        onSelect: '&onSelect'
      }
    };

    /////////////////////

    function link(scope, elem, attrs){

      scope.selectedText=selectedText;

      // Initializer
      function init(){
        // TODO: Fetch texts from server
        getTextFromServer();
        bindLoadMoreFonts();
        // setupTexts();
      }
      function getTextFromServer() {
        restFactory.media.get(defaultQuery).then(function (resp) {
          texts = resp.data.media;
          totalCount = resp.data.count;
          setupTexts();
        })
      }
      // Pagination
      function bindLoadMoreFonts(){
        var stickerDiv = angular.element('.sidemenu-texts');
        stickerDiv.scroll(function(){
          var offset = 20;
          var stickerDivHeight = stickerDiv.height();
          var scrollBottom = stickerDiv.scrollTop() + stickerDivHeight + offset;
          var stickerDivScrollHeight = stickerDiv[0].scrollHeight;
          if(scrollBottom >= stickerDivScrollHeight ){
            console.log("fetching more fonts");
            // loadMoreFonts();
          }
        });
      }

      function loadMoreFonts() {
        var data = defaultQuery;
        data.from += defaultQuery.size;
        restFactory.media.get(data).then(function (resp) {
          texts.push.apply(texts, resp.data.media);
          setupTexts();
        })
      }


      // setup text
      function setupTexts(){
        if(texts.length>0){
          // console.log("RUNNING TEXTS SETUP: ");
          scope.texts = texts;
          loadTexts();
        }
        else{
          // console.log("NO TEXT, NO SETUP");
        }
      }

      // load texts
      function loadTexts(){
        for(var i=0; i<scope.texts.length; i++){
          (function(){
            scope.texts[i].url = covertUrl(scope.texts[i]);
            var textToLoad = scope.texts[i];
            // console.log("LOADING TEXTS AS CSS: ",textToLoad);
            $("head").prepend("<style type=\"text/css\">" +
              "@font-face {\n" +
              "\tfont-family: \""+ textToLoad._id +"\";\n" +
              "\tsrc: url('"+ textToLoad.url +"');\n" +
              "}\n" +
              "\t.font-"+ textToLoad._id +" {\n" +
              "\tfont-family: '"+ textToLoad._id +"' !important;\n" +
              "}\n" +
              "</style>");
            $("body").append("<p class='font-" + textToLoad._id + "'>&nbsp;</p>")
          }());
        }
      }

      // convert url
      function covertUrl(text){
        return $rootScope.safeUrlConvert(text.url);
      }

      // pagination

      function selectedText(text, index) {
        //scope.texts[index].selected = true;
        scope.onSelect({text: text});
      }


      // call initializer
      init();


    }

  }

}());
