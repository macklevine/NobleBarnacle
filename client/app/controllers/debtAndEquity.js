angular.module('mimo.debtAndEquity', [])
  .controller('debtAndEquityController', function ($scope, modelFactory){
  $scope.debtAndEquity = modelFactory.model.debtsAndEquities;
});