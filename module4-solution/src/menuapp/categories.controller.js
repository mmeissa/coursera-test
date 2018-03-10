(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('CategoriesCtrl', CategoriesCtrl)
  CategoriesCtrl.$inject = ['resolvedCatList'];
  function CategoriesCtrl(resolvedCatList) {
  	var CategoriesCtrl = this;
  	CategoriesCtrl.catlist = resolvedCatList; //resoved in the routs
  }





}());
