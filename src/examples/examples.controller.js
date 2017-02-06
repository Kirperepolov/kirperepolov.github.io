(function() {
  'use strict';

  angular.module('MainApp')
  .controller('ExamplesController',ExamplesController);

  ExamplesController.$inject = ['examples'];
  function ExamplesController(examples){
    var exmpCtrl = this;
    exmpCtrl.examples = examples;
    let examplesQuantity = exmpCtrl.examples.length;

    let activeSlide = 0;

    exmpCtrl.whattheClass = function(index){
      if (activeSlide===index){
        return "active";
      } else if (activeSlide===(index-1+examplesQuantity)%examplesQuantity) {
        return "next hidden-sm hidden-xs";
      } else if (activeSlide===(index+1+examplesQuantity)%examplesQuantity) {
        return "previous hidden-sm hidden-xs";
      } else {return "hidden"};
    };

    exmpCtrl.activate = function(index){
      activeSlide = index;
    };

    exmpCtrl.prev = function(){
      activeSlide = (activeSlide-1+examplesQuantity)%examplesQuantity;
    };

    exmpCtrl.next = function(){
      activeSlide = (activeSlide+1+examplesQuantity)%examplesQuantity;
    };

  };
}());
