angular.module('mimo.general', [])
  .controller('generalController', function ($scope, generalFactory) {
  $scope.message = [];
  // $scope.message = generalFactory.getGeneral();
  $scope.getGeneral = function(){
    generalFactory.getGeneral().then(function(resp){
      $scope.message = resp.gAndA;
    })
  }
})
  .factory('generalFactory', function ($http) {
    var factory = {};
    factory.getGeneral = function(){
      return $http({
        method:'GET',
        url:'/general'
      }).then(function(results){
        return results.data[0];
      });
    }
    return factory;
  })