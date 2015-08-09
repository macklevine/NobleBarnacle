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
        templateUrl: '/model/model.html',
        controller: 'modelController'
      }).
      when('/employee', {
        templateUrl: '/employee/employee.html',
        controller: 'employeeController'
      }).
      when('/expenses', {
        templateUrl: '/expenses/expenses.html',
        controller: 'expensesController'
      }).
      when('/equity', {
        templateUrl: '/debtAndEquity/debtAndEquity.html',
        controller: 'debtAndEquityController'
      }).
      when('/general', {
        templateUrl: '/general/general.html',
        controller: 'generalController'
      }).
      when('/revenue', {
        templateUrl: '/revenue/revenue.html',
        controller: 'revenueController'
      })
  }])