var login = {
   templateUrl: 'js/components/login/login.html',
    controller: 'loginController'
};

angular
    .module('login')
    .component('login', login)
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('login', {
                url: '/',
                component: 'login'
            });

        $urlRouterProvider.otherwise('/courses');
    });