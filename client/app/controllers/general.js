angular.module('mimo.general', [])
  .controller('generalController', function ($scope, modelFactory, generalFactory){
    $scope.general = modelFactory.model.expenses.gAndA;
    $scope.printSmile = function(){
      generalFactory.printSmile();
    }
  })
  .factory('generalFactory', function(){
    var generalFactory = {};
    generalFactory.printSmile = function(){
      console.log(":)");
    };
    return generalFactory;
  });