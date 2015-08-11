var mimo = angular.module('mimo', [
  'ngRoute',
  'mimo.model',
  'mimo.employee',
  'mimo.startup',
  'mimo.debtAndEquity',
  'mimo.general',
  'mimo.revenue',
  'mimo.products'
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
      when('/startup', {
        templateUrl: 'app/views/startup.html',
        controller: 'startupController'
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
      }).
      when('/products', {
        templateUrl: 'app/views/products.html',
        controller: 'productsController'
      })
  }
]);

mimo.factory('modelFactory', function ($http) {
  var modelFactory = {};
  modelFactory.madeServerRequest = false;
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