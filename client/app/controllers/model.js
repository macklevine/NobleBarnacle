angular.module('mimo.model', [])
  .controller('modelController', function ($scope, modelFactory){
  // $scope.model = 'Model Controller';
  $scope.model = modelFactory.model;
  $scope.getModel = function(){
    modelFactory.getModel().then(function(results){
      console.log('Recieved Model for user');
      // $scope.model = results.model;
    })
  }
})