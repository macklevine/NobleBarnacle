angular.module('mimo.employee', [])
  .controller('employeeController', function ($scope, dataFactory, employeeFactory){
    $scope.data = dataFactory.model.expenses.employees;
})
  .factory('employeeFactory', function(){
    employeeFactory = {};
      //place code for manipulation the employee data here

    return employeeFactory;
})
  .directive('d3Employee', ['$window', '$timeout', 'd3Service', 
    function($window, $timeout, d3Service) {
      return {
        restrict: 'ACE',
        scope: {
          data: "=" //this binds $scope.data to scope.data. Use scope.data inside D3
        },
        //run as a link directive rather that the compile directive
        //this runs once the html/directives are compiiled and they will
        //be ready to go when the view is loaded.
        link: function(scope, ele, attrs) {
          d3Service.d3().then(function(d3) {
            //place your D3 code here
            //IMPORTANT...
            //remember your code needs to operate on the scope.data object
          });
        }}
    }])
