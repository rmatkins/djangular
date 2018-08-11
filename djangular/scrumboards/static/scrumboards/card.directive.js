(function() {
    'use_strict';

    angular.module('scrumboards.demo')
        .directive('scrumboardCard', CardDirective);

    function CardDirective() {
        return {
            templateUrl: 'static/scrumboards/card.html',
            restrict: 'E',
            controller: ['$scope', '$http', function($scope, $http) {
                var url = '/scrumboards/cards/' + $scope.card.id + '/';

                $scope.update = function() {
                    $http.put(url, $scope.card);
                };

                $scope.modelOptions = {
                    debounce: 500
                };

                $scope.delete = function() {
                    // Prompt user to confirm they really want to delete the card
                    if (confirm("Are you sure you want to delete?")) {

                    // Send delete command to server using REST then delete from browser data
                    $http.delete(url)
                        .then(function(){
                            var cards = $scope.list.cards;
                            cards.splice(cards.indexOf($scope.card),1);

                        })
            }
        }
            }]
        };
    }
})();