var courseContent = {
    templateUrl: 'js/components/course-modals/courseContent.html',
    controller: 'courseContentController',
    bindings: {
        resolve: '<',
        close: '&',
        dismiss: '&'
    }
};

angular
    .module('courses')
    .component('courseContent', courseContent);