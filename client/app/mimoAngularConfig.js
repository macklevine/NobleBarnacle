var mimo = angular.module('mimo', [
  'ngRoute',
  'mimo.model',
  'mimo.employee',
  'mimo.expenses',
  'mimo.debtAndEquity',
  'mimo.general',
  'mimo.revenue'
]);

mimo.config(['$routeProvider', 
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: '/app/model/model.html',
        controller: 'modelController'
      }).
      when('/employee', {
        templateUrl: 'app/employee/employee.html',
        controller: 'employeeController'
      }).
      when('/expenses', {
        templateUrl: 'app/expenses/expenses.html',
        controller: 'expensesController'
      }).
      when('/equity', {
        templateUrl: 'app/debtAndEquity/debtAndEquity.html',
        controller: 'debtAndEquityController'
      }).
      when('/general', {
        templateUrl: 'app/general/general.html',
        controller: 'generalController'
      }).
      when('/revenue', {
        templateUrl: 'app/revenue/revenue.html',
        controller: 'revenueController'
      })
  }])