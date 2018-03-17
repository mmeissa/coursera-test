(function () {
"use strict";

angular.module('public')
.controller('myInfoController', myInfoController);

myInfoController.$inject = ['userData'];
function myInfoController(userData) {
  var $ctrl = this;
  $ctrl.userdata = userData;
}

})();
