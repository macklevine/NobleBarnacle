angular.module('mimo.model', [])
  .controller('modelController', function ($scope, dataFactory){
  $scope.model = dataFactory.model;
  $scope.getModel = function(){
    dataFactory.getModel().then(function(results){
      console.log('Recieved Model for user');
    })
  }
})
//Uncomment below code for data manipulation factory
/*
  .factory('modelDataFactory', function(){
    modelDataFactory = {};
      //place code for manipulation the model data here

    return modelDataFactory;
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