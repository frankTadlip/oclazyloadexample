(function () {
    'use strict';

    angular.module('abcd', [])
        .controller('AbcdCtrl', function () {
            var vm = this;
            vm.title = 'shit everywhere';
            vm.cart = function () {
                console.log('cart');
            }
            return vm;
        });

})();