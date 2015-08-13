/*
Angular module for products within the financial model

$scope.data -> contains the data related to products data for the
                        financial model. Accessed from the dataFactory object
                        without an extra HTTP request.

RECALL: Within dataFactory.model you have access to the entire model here if you need
        any of that information for analytics or visulaizations. We've only pulled in
        the specific information for display. 
*/

angular.module('mimo.products', [])
  .controller('productsController', function ($scope, dataFactory, productsFactory){
  $scope.data = dataFactory.model.products;
})
  .factory('productsFactory', function(){
    productsFactory = {};
      //place code for manipulation the products data here

    return productsFactory;
})
  .directive('d3Products', ['$window', '$timeout', 'd3Service', 
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
