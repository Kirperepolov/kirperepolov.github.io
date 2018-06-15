(function() {
  'use strict';

  angular.module('MainApp')
  .controller('MainController',MainController);

  function MainController(){
    var ctrl = this;

    ctrl.$onInit = function(){
      let bodyHeight = window.innerHeight;
      console.log('The initial body height is: ' + $('body').height());
      console.log('The initial window height is :' + bodyHeight);
      $('body').height(bodyHeight);
    };



    ctrl.activateImg = function($event){
      let $modal = $('.modal');
      let img = $($event.currentTarget);
      let imdAdr = img.prop('src');
      let alt = img.prop('alt') || 'image';
      $modal.show()
            .find("img").prop('src', imdAdr)
                                 .prop('alt', alt);
      // $modal.show();
    };

    ctrl.deactivateImg = function(index){
      $('.modal').hide();
    };
  };

}());
