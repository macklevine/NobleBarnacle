angular.module('mimo.model', [])
  .controller('modelController', function ($scope, modelFactory){
  $scope.message = 'Model Controller';
  $scope.getModel = function(){
    modelFactory.getModel().then(function(results){
      console.log('Recieved Model for user');
    })
  }
})