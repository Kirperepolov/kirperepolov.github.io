(function() {
  'use strict';

  angular.module('MainApp')
  .service('LoadService',LoadService);

  LoadService.$inject = ['$http'];
  function LoadService($http){
    let serv = this;

    serv.loadExamples = function(){
      return $http.get('/src/examples/work-examples.json')
                  .then(res=>res.data)
                  .catch(err=>console.log(err));
    };
  };

}());
