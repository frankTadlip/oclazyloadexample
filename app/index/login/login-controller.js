(function () {
    'use strict';

    angular.module('App.Index.Login')
        .controller('App.Index.Login.LoginCtrl', ctrl);

        ctrl.$inject = ['$state']

    function ctrl($state) {
        var vm = this;
        vm.title = "Login";
        vm.click = function (){
            $state.go('reset-password');
        }

    }

})();