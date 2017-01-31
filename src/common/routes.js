(function() {
  'use strict';

  angular.module('MainApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider){

    // Redirect to tab 1 if no other URL matches
    $urlRouterProvider.otherwise('/');

    // Set up UI states
    $stateProvider
      .state('home',{
        url:'/',
        templateUrl:"src/home/home.template.html"
      })

      .state('contact',{
        url:'/contact-me',
        templateUrl:'src/contact/contact.template.html'
      });

  };
}());
