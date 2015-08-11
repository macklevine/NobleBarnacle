angular.module('mimo.products', [])
  .controller('productsController', function ($scope, modelFactory){
  // $scope.products = modelFactory.model.products;
  $scope.products = "Products Controller";
});