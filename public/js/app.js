angular
    .module('means', ['angular-storage', 'header', 'login', 'courses', 'means'])
    .constant('APIURL', window.location.protocol + '//' + window.location.hostname + ':8080/api/')
    /*.config(['$qProvider', function( $qProvider) {
        $qProvider.errorOnUnhandledRejections(false);
    }])*/
    .run(function ($state, $rootScope) {

        $rootScope.$on('system-logout', function(){
            $state.go('login');
        });

    });