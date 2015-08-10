/*angular.module('mimo.general', [])
  .controller('generalController', function ($scope, generalFactory) {
  $scope.model = generalFactory.model;
  $scope.getGeneral = function(){
    generalFactory.getGeneral().then(function(resp){
      $scope.message = resp.gAndA;
    })
  }
})
  .factory('generalFactory', function ($http) {
    var factory = {};
    factory.model = [1,2,3,4,5,6,7,8,9];
    factory.getGeneral = function(){
      console.log('made http request');
      return $http({
        method:'GET',
        url:'/general'
      }).then(function(results){
        return results.data[0];
      });
    }
    return factory;
  })*/


angular.module('mimo.general', [])
  .controller('generalController', function ($scope, modelFactory){
    $scope.showModel = function(){
      if(!modelFactory.madeServerRequest){
        modelFactory.getModel().then(function(resp){
          $scope.general = modelFactory.model;
        })
      }else{
        $scope.general = modelFactory.model;
      }
    }
    $scope.update = function(){
      modelFactory.getModel().then(function(response){
        $scope.model = resp;
      })
    };
  })
  .factory('modelFactory', function ($http) {
    var modelFactory = {};
    modelFactory.madeServerRequest = false;
    modelFactory.model = [];
    modelFactory.getModel = function(){
      console.log('made http request');
      return $http({
        method: 'GET',
        url: '/general'
      }).then(function(results){
        modelFactory.madeServerRequest = true;
        modelFactory.model = results.data;
        // return results;
      });
    }
    return modelFactory;
  })