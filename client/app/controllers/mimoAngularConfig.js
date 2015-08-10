var mimo = angular.module('mimo', [
  'ngRoute',
  'mimo.model',
  'mimo.employee',
  'mimo.expenses',
  'mimo.debtAndEquity',
  'mimo.general',
  'mimo.revenue',
]);

mimo.config(['$routeProvider', 
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'app/views/model.html',
        controller: 'modelController'
      }).
      when('/employee', {
        templateUrl: 'app/views/employee.html',
        controller: 'employeeController'
      }).
      when('/expenses', {
        templateUrl: 'app/views/expenses.html',
        controller: 'expensesController'
      }).
      when('/equity', {
        templateUrl: 'app/views/debtAndEquity.html',
        controller: 'debtAndEquityController'
      }).
      when('/general', {
        templateUrl: 'app/views/general.html',
        controller: 'generalController'
      }).
      when('/revenue', {
        templateUrl: 'app/views/revenue.html',
        controller: 'revenueController'
      })
  }
]);

mimo.factory('modelFactory', function ($http) {
  var modelFactory = {};
  modelFactory.madeServerRequest = false;
  modelFactory.model = [];
  modelFactory.getModel = function(){
    console.log('made http request');
    return $http({
      method: 'GET',
      url: '/model'
    }).then(function(results){
      modelFactory.madeServerRequest = true;
      modelFactory.model = results.data;
    });
  }
  return modelFactory;
})