(function() {
    var myApp = angular.module('myApp');
    // Passing in array of dependencies

    var UserController = function($scope, github, $routeParams) {
        var onUserComplete = function(data) {
            $scope.user = data;
            github.getRepos($scope.user).then(onRepos, onError);
        };

        var onRepos = function(data) {
            $scope.repos = data;
            $location.hash('userDetails');
            $anchorScroll();
        };

        var onError = function(reason) {
            $scope.error = 'Could not fetch the data.';
        };

        $scope.username = 'angular';
        $scope.repoSortOrder = '-stargazers_count';
    };

    myApp.controller('UserController', UserController);
})();
