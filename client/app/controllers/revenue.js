angular.module('mimo.revenue', [])
  .controller('revenueController', function ($scope, modelFactory){
  $scope.revenue = modelFactory.model.revenueSources;
}).
  directive('d3Employee', ['$window', '$timeout', 'd3Service', 
    function($window, $timeout, d3Service) {
      return {
        restrict: 'ACE',
        scope: true,
        link: function(scope, ele, attrs) {
          d3Service.d3().then(function(d3) {

          });
        }}
  }])