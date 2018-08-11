(function(){
    'use_strict';

    angular.module('scrumboards.demo').run(['$http', run])

    function run($http) {
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';
    }
})();