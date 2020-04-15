(function () {
    'use strict';

    angular.module('mainApp')
        .config(function ($stateProvider) {
            $stateProvider.state('login', {
                url: '/login',
                templateUrl: '/app/index/login/login.html',
                controller: 'App.Index.Login.LoginCtrl as vm',
                resolve: {
                    loadCtrl: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            files: [
                                '/app/index/login/login-module.js',
                                '/app/index/login/login-controller.js'
                            ]
                        }).then(function success(res) {
                            console.log(res);
                        }, function error(err) {
                            console.log(err);
                        })
                    }
                }
            })

            $stateProvider.state('reset-password', {
                url: '/reset-password',
                templateUrl: '/app/index/reset-password/reset-password.html',
                controller: 'App.Index.ResetPassword.ResetPasswordCtrl as vm',
                resolve: {
                    loadCtrl: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            files: [
                                '/app/index/reset-password/reset-password-module.js',
                                '/app/index/reset-password/reset-password-controller.js'
                            ]
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