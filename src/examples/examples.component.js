(function() {
  'use strict';

  angular.module('MainApp')
  .controller('ExamplesController',ExamplesController);

  ExamplesController.$inject = ['examples'];
  function ExamplesController(examples){
    var exmpCtrl = this;
    
  };
}());
