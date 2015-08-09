angular.module('mimo.general', [])
  .controller('generalController', function ($scope, generalFactory) {
  $scope.message = 'General Controller';
  generalFactory.getGeneral();
})

  .service('generalFactory', function ($http) {
    this.getGeneral = function(){
      return $http({
        method:'GET',
        url:'/model'
      }).then(function(results){
        console.log(results);
        return results;
      });
    }
  })