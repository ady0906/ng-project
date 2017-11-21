(function() {
    var myApp = angular.module('myApp', []);
    // Passing in array of dependencies

    var MainController = function($scope, $http, $interval) {
        var onUserComplete = function(response) {
            $scope.user = response.data;
            $http
                .get($scope.user.repos_url)
                .then(onRepos, onError);
        };

        var onRepos = function(response) {
            $scope.repos = response.data;
        };

        var onError = function(reason) {
            $scope.error = 'Could not fetch the data.';
        };

        var decrementCountdown = function() {
            $scope.countdown -= 1;
            if ($scope.countdown < 1) {
                $scope.search($scope.username);
            }
        }

        var startCountdown = function() {
            $interval(decrementCountdown, 1000, $scope.countdown);
        }

        $scope.search = function(username) {
            $http
                .get('https://api.github.com/users/' + username)
                .then(onUserComplete, onError);
        };
        $scope.username = 'angular';
        $scope.message = 'GitHub viewer';
        $scope.repoSortOrder = '-stargazers_count';
        $scope.countdown = 5;
        startCountdown();
    };

    myApp.controller('MainController', ['$scope', '$http', '$interval', MainController]);
})();
