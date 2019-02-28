function Credentials(store, $state, $rootScope) {
    this.login = function(userobj){
        store.set('login', userobj.login);
        store.set('password', userobj.password);
        store.set('name', userobj.fname);
        store.set('lastname', userobj.lname);
        store.set('email', userobj.email);
        store.set('id', userobj.id);
    };

    this.logout = function(){
        store.remove('login');
        store.remove('password');
        store.remove('name');
        store.remove('lastname');
        store.remove('email');
        store.remove('id');
        $rootScope.$broadcast('system-logout');
    };

    this.getUsername = function(){
        return store.get('login');
    };

    this.getPassword = function(){
        return store.get('password');
    };

    this.getName = function(){
        return store.get('name');
    };

    this.getLastname = function(){
        return store.get('lastname');
    };

    this.getEmail = function(){
        return store.get('email');
    };
}

Credentials.$inject = ['store', '$state', '$rootScope'];

angular
    .module('means')
    .service('Credentials', Credentials);