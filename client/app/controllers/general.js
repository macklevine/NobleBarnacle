angular.module('mimo.general', [])
  .controller('generalController', function ($scope, modelFactory){
    $scope.general = modelFactory.model.expenses.gAndA;
  });