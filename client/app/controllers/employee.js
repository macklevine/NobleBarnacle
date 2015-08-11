angular.module('mimo.employee', [])
  .controller('employeeController', function ($scope, modelFactory){
  $scope.employee = modelFactory.model.expenses.employees;
})