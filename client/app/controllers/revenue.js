/*
Angular module for revenue data within the financial model

$scope.data -> contains the data related to revenue data for the
                        financial model. Accessed from the dataFactory object
                        without an extra HTTP request.

RECALL: Within dataFactory.model you have access to the entire model here if you need
        any of that information for analytics or visulaizations. We've only pulled in
        the specific information for display. 
*/


angular.module('mimo.revenue', [])
  .controller('revenueController', function ($scope, dataFactory, revenueFactory){
  $scope.data = dataFactory.model.products;
})
  .factory('revenueFactory', function(){
    revenueFactory = {};
      //place code for manipulation the revenue data here

    return revenueFactory;
})
  .directive('d3Revenue', ['$window', '$timeout', 'd3Service', 
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
