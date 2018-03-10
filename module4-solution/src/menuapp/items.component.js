(function () {
'use strict';

angular.module('MenuApp')
.component('itemsComponant', {
  templateUrl: 'src/menuapp/templates/items.component.html',
  bindings: {
    items: '<'
  }
});

})();
