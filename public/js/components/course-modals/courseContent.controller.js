function courseContentController() {
    var ctrl = this;

    ctrl.ok = function () {
        ctrl.close({$value: ""});
    };
}

/* if you need to inject something into the controller
 * e.g
 * maboutusshowController.$inject = ['$scope'];
 *
 * then you need to add $scope to the above function
 * e.g
 * function maboutusshowController($scope) {
 */
courseContentController.$inject = [];

angular
    .module('courses')
    .controller('courseContentController', courseContentController)