function LoginService($http, APIURL) {

	this.login = function(data){
        var req = {
            method: 'POST',
            url: APIURL + 'login',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

		return $http(req)
			.then(function(response){
			return response.data;
		});
	};
}

LoginService.$inject = ['$http', 'APIURL'];

angular
	.module('login')
	.service('LoginService', LoginService);