angular.module('mimo.revenue', [])
  .controller('revenueController', function ($scope, modelFactory){
  $scope.revenue = modelFactory.model.revenueSources;
})