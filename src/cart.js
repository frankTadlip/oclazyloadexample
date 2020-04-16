(function () {
    'use strict';

    angular.module('cart', [])
        .service('CartCtrl', function () {
            var vm = this;
            vm.aa = [{ id: 1 }];
            vm.cart = function () {
                console.log('cart');
            }
            return vm;
        });

})();