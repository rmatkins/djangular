(function(){
    'use strict';

    angular.module("scrumboards.demo", [])
        .controller('ScrumboardController', ['$scope', '$http',  ScrumboardController]);

    function ScrumboardController($scope, $http) {

        $scope.login = function() {
            $http.post('auth_api/login/',
                {username: 'matkins', password: 'snitkamr'});
        };

        $scope.data = [];
        $http.get('/scrumboards/lists/')
            .then(function(response){
                $scope.data = response.data;
            });

        $scope.add = function(list, title){
            var card = {
                list: list.id,
                title: title
            };

            $http.post('/scrumboards/cards/', card)
                .then(function(response){
                    list.cards.push(response.data);
                },
                    function(){ alert('Could not create card.')});
        };




    }
}());