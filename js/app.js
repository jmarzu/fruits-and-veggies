/* setup your angular app here */

// debug stuff to show the app is loading and fruit / veggies are available

  console.log('App Started');
  console.log('Fruit count', fruits.length);
  console.log('Veggie count', vegetables.length);

var myApp = angular.module('myApp', []);

myApp.controller('myCtrl', ['$scope', function($scope) {
  $scope.fruits = [];
  $scope.veggies = [];
  $scope.foodArray = fruits.concat(vegetables);

  $scope.moveLeft = function(idx) {
    $scope.fruits.push($scope.foodArray[idx]);
    $scope.foodArray.splice(idx, 1);
  }

  $scope.moveRight = function(idx) {
    $scope.veggies.push($scope.foodArray[idx]);
    $scope.foodArray.splice(idx, 1);
  }

  $scope.moveBackRight = function(idx) {
    $scope.foodArray.push($scope.fruits[idx]);
    $scope.fruits.splice(idx, 1);
  }

  $scope.moveBackLeft = function(idx) {
    $scope.foodArray.push($scope.veggies[idx]);
    $scope.veggies.splice(idx, 1);
  }

}]);
