angular.module('mimo.general', [])
  .controller('generalController', function ($scope, modelFactory){
    $scope.general = modelFactory.model;
    $scope.update = function(){
      modelFactory.getModel().then(function(response){
        $scope.model = resp;
      })
    };
  });