function coursesController(Credentials, $state, $uibModal) {
    var ctrl = this;
    ctrl.user = {};
    ctrl.courses = [];

    ctrl.$onInit = function(){
        if (Credentials.getUsername()) {
            ctrl.user = {
                name: Credentials.getName(),
                lastname: Credentials.getLastname(),
                username: Credentials.getUsername()
            };

            for (var i = 0; i < this.data.length; i++) {
                ctrl.courses.push({
                    id: this.data[i].id,
                    code: this.data[i].code,
                    description: this.data[i].description,
                    launch: this.data[i].launch,
                    name: this.data[i].name,
                    open: false
                });
                if (this.data[i].active === 1) {
                    ctrl.selectedaboutus.id = this.data[i].id;
                }
            }
        }
        else {
            $state.go('login');
        }

    };

    ctrl.logout = function () {
        Credentials.logout();
    };

    ctrl.courseContent = function(course){
        var modalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            component: 'courseContent',
            size: 'lg',
            windowClass: 'custom-modal',
            resolve: {
                items: function () {
                    return {
                        course: course,
                    };
                }
            }
        });
        modalInstance.result.then(function() {
        }, function() {
        });
    };
}

/* if you need to inject something into the controller
 * e.g
 * coursesController.$inject = ['$scope'];
 *
 * then you need to add $scope to the above function
 * e.g
 * function coursesController($scope) {
 */
coursesController.$inject = ['Credentials', '$state', '$uibModal'];

angular
    .module('courses')
    .controller('coursesController', coursesController);