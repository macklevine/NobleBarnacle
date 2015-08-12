/*
This is the MAIN Angular module for the entire application
Every other module for the different views/models are loaded as
dependencies. They are named with the following nameing convention:
      mimo.(data the model is in charge of)
      ie: mimo.model -> in charge of entire model visualization and analytics
          mimo.revenue -> in charge of only revenue specific visualizations and analysis
*/

var mimo = angular.module('mimo', [
  'ngRoute',
  'mimo.model', //model.js
  'mimo.employee', //employee.js
  'mimo.startup', //startup.js
  'mimo.debtAndEquity', //debtAndEquity.js
  'mimo.general', //general.js
  'mimo.revenue', //revenue.js
  'mimo.products' //products.js
]);

/*
Angular Routes

required: ngRoute injected above as a dependecy
*/
mimo.config(['$routeProvider', 
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'app/views/model.html',
        controller: 'modelController' //model.js
      }).
      when('/employee', {
        templateUrl: 'app/views/employee.html',
        controller: 'employeeController' // employee.js
      }).
      when('/startup', {
        templateUrl: 'app/views/startup.html',
        controller: 'startupController' //startup.js
      }).
      when('/equity', {
        templateUrl: 'app/views/debtAndEquity.html',
        controller: 'debtAndEquityController' //debtAndEquity.js
      }).
      when('/general', {
        templateUrl: 'app/views/general.html',
        controller: 'generalController' //general.js
      }).
      when('/revenue', {
        templateUrl: 'app/views/revenue.html',
        controller: 'revenueController' //revenue.js
      }).
      when('/products', {
        templateUrl: 'app/views/products.html',
        controller: 'productsController' //products.js
      })
  }
]);
/*
HTTP rquest factory.

Here is the logic for making a request to the express server for the entire
financial model
*/
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
});

mimo.factory('d3Service', ['$document', '$window', '$q', '$rootScope',
  function($document, $window, $q, $rootScope) {
    var d = $q.defer(),
        d3service = {
          d3: function() { return d.promise; }
        };
  function onScriptLoad() {
    // Load client in the browser
    $rootScope.$apply(function() { d.resolve($window.d3); });
  }
  var scriptTag = $document[0].createElement('script');
  scriptTag.type = 'text/javascript'; 
  scriptTag.async = true;
  // scriptTag.src = 'http://d3js.org/d3.v3.min.js';
  scriptTag.src = '../bower_components/d3/d3.min.js';
  scriptTag.onreadystatechange = function () {
    if (this.readyState == 'complete') onScriptLoad();
  }
  scriptTag.onload = onScriptLoad;

  var s = $document[0].getElementsByTagName('body')[0];
  s.appendChild(scriptTag);

  return d3service;
}]);