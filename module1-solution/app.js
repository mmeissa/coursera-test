(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.messageToDisplay = "";
  $scope.enteredDishesString="";
  $scope.textClass="";
  $scope.messageClass="";

  $scope.checkNumberOfDishes = function () {
    $scope.messageToDisplay =FindCorrectMessage($scope.enteredDishesString);
    $scope.textClass="";
    $scope.messageClass="";
    if ($scope.messageToDisplay== "Enjoy!" || $scope.messageToDisplay == "Too much!") {
      $scope.textClass="greenBorder";
      $scope.messageClass="greenText";
    }
    else if($scope.messageToDisplay == "Please enter data first" || $scope.messageToDisplay == "Empty dishes are ignored! Please enter valid data"){
      $scope.textClass="redBorder";
      $scope.messageClass="redText";
    }
  };
function FindCorrectMessage(data) {

    if (data=="") {
      return "Please enter data first" ;
    }
    var dishesArray=$scope.enteredDishesString.split(',');
    var count=CountNoneEmpty(dishesArray);
    //alert (count);
    if (count <1) {
      return  "Empty dishes are ignored! Please enter valid data";
    }
    if (count <4) {
      return  "Enjoy!";
    }
    if (count >=4) {
      return  "Too much!" ;
    }
  };
  function CountNoneEmpty(arrayToCount) {
    var count=0;
    for (var i = 0; i < arrayToCount.length; i++) {
      if (arrayToCount[i].trim()!=="") {//count only valid data
        count++;
      }
    }
    return count;
  };
};

})();
