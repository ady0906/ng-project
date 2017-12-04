(function() {
    var myApp = angular.module('myApp');

    var RepoController = function($scope, $routeParams, github) {
        onRepoComplete = function(data) {
            $scope.repo = data;
            github
                .getContributors($scope.username, $scope.reponame)
                .then(onContributors, onError);
        };

        var onContributors = function(data) {
            $scope.contributors = data;
        };

        var onError = function(reason) {
            $scope.error = 'Could not fetch the data.';
        };

        $scope.username = $routeParams.username;
        $scope.reponame = $routeParams.reponame;
        github
            .getRepo($scope.username, $scope.reponame)
            .then(onRepoComplete, onError);
    };

    myApp.controller('RepoController', RepoController);
})();
