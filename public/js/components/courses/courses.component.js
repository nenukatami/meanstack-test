var courses = {
    bindings: {
        data: '<'
    },
    templateUrl: 'js/components/courses/courses.html',
    controller: 'coursesController'
};

angular
    .module('courses')
    .component('courses', courses)
    .config(function($stateProvider) {

        $stateProvider
            .state('courses', {
                url: '/courses',
                component: 'courses',
                resolve: {
                    data: function(CoursesService){
                        return CoursesService.getCoursesByUser();
                    }
                }
            });
    });