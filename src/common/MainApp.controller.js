(function() {
  'use strict';

  angular.module('MainApp')
  .controller('MainController',MainController);

  function MainController(){
    var ctrl = this;

    ctrl.$onInit = function(){
      let bodyHeight = window.height();
      console.log('The initial body height is: ' + $('body').height());
      console.log('The initial window height is :' + bodyHeight);
      $('body').height(bodyHeight);
    };
  };

}());
