(function () {
    'use strict';

    angular.module('shit', [
        'oc.lazyLoad',
        'ui.router'
    ])
        .controller('ShitCtrl', function ($state, $window) {
            var vm = this;

            vm.click = function () {
                $state.go('abcd');
            }

            $window.location = 'http://127.0.0.1:8888' + '/app/index/index.html#/login'
        });

})();