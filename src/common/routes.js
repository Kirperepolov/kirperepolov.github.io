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
      })

      .state('about-project',{
        url:'/about-project',
        templateUrl:'src/about/about.template.html'
      })

      .state('dubki',{
        url:'/dubki',
        templateUrl:'src/map/dubki.template.html'
      })

      .state('dubki-car',{
        url:'/dubki-car',
        templateUrl:'src/map/dubki-car.template.html'
      })

      .state('dubki-bus',{
        url:'/dubki-bus',
        templateUrl:'src/map/dubki-bus.template.html'
      })

      .state('examples',{
        url:'/examples',
        templateUrl:'src/examples/examples.template.html',
        controller: 'ExamplesController',
        controllerAs: 'exmpCtrl',
        resolve:{
          examples: ['LoadService',
            function (LoadService) {
              return LoadService.loadExamples()
                .then(function (list) {
                  return list;
                });
            }]}
      });
  };
}());
