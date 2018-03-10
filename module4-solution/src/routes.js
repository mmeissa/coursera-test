(function () {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'src/menuapp/templates/home.view.html'
      })

      .state('categories', {
        url: '/categories',
        templateUrl: 'src/menuapp/templates/categories.view.html',
        controller: 'CategoriesCtrl as CategoriesCtrl',
        resolve: {
        	resolvedCatList: ['MenuDataService', function(MenuDataService) {
        		return MenuDataService.getAllCategories();
        	}],
        }
      })

      .state('categoryitems', {
        url: '/categoryItems/{categoryShortName}',
        templateUrl: 'src/menuapp/templates/items.view.html',
				controller: 'ItemsCtrl as CatItems',
        resolve: {
        	items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
        		return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
        	}]
        }
      })
      

  }


}());
