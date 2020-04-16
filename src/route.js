(function () {
    'use strict';

    angular.module('shit')
        .config(function ($stateProvider) {
            console.log($stateProvider);
            $stateProvider.state('abcd', {
                templateUrl: 'src/abcd/abcd.html',
                controller: 'AbcdCtrl as vm',
                resolve: {
                    loadCtrl: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            files: ['src/abcd/abcd.js']
                        }).then(function success(res) {

                            console.log(res);
                        }, function error(err) {
                            console.log(err);
                        })
                    }
                }
            })

        });
})();