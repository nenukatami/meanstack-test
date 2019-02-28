function loginController(LoginService, Credentials, $state) {
    var ctrl = this;
    ctrl.userobj = {};
    ctrl.loginmessage = '';

    ctrl.login = function(form) {
        if (form.$valid) {
            let data = {
                login: ctrl.userobj.login,
                password: ctrl.userobj.password
            };

            LoginService.login(data).then(function (response) {
                if (response.length === 1) {
                    Credentials.login(response[0]);
                    $state.go('courses');
                }
                else{
                    ctrl.loginmessage = 'Bad Credentials!!!!';
                    ctrl.userobj = {};
                    form.$setPristine();
                    form.$setUntouched();
                }
            }, function (response) {
                console.log(response);
            });
        }
    }
}

/* if you need to inject something into the controller
 * e.g
 * loginController.$inject = ['$scope'];
 *
 * then you need to add $scope to the above function
 * e.g
 * function loginController($scope) {
 */
loginController.$inject = ['LoginService', 'Credentials', '$state'];

angular
    .module('login')
    .controller('loginController', loginController);
