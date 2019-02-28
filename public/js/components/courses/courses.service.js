function CoursesService($http, APIURL, Credentials) {

    this.getCoursesByUser = function(data){
        var req = {
            method: 'POST',
            url: APIURL + 'courses',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {login: Credentials.getUsername(), password: Credentials.getPassword()}
        };

        return $http(req)
            .then(function(response){
                return response.data;
            });
    };
}

CoursesService.$inject = ['$http', 'APIURL', 'Credentials'];

angular
    .module('courses')
    .service('CoursesService', CoursesService);