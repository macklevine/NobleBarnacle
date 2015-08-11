angular.module('mimo.startup', [])
  .controller('startupController', function ($scope, modelFactory){
  $scope.startupCosts = modelFactory.model.expenses.startupCosts;
})