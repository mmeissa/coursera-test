(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemsCtrl', ItemsCtrl);
  ItemsCtrl.$inject = ['items'];
  function ItemsCtrl(items) {
  	var ctrl = this;
  	ctrl.items = items;
  }

}());
