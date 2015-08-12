angular.module('mimo.products', [])
  .controller('productsController', function ($scope, modelFactory){
  // $scope.products = modelFactory.model.products;
  $scope.products = "Products Controller";
});
//Uncomment below code for data manipulation factory
/*
  .factory('productsFact', function(){
    productsFact = {};
      //place code for manipulation the products data here

    return productsFact;
})
*/
//Uncomment below code for custom D3 directive
/*
  .directive('d3Employee', ['$window', '$timeout', 'd3Service', 
    function($window, $timeout, d3Service) {
      return {
        restrict: 'ACE',
        //NOTE TO MYSELF: Replace this with the proper scoping to the data object..
        // something like this... scope:{data:'='}
        scope: true,
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
*/