(function() {

    var myApp = angular.module('myApp');

    var RepoController = function($scope, $routeParams, $log, github) {
        onRepoComplete = function(data) {
            console.log(data);
            // $scope.repo = data;
            // github.getContributors($scope.)
        }

        // var onUserComplete = function(data) {
        //     $scope.user = data;
        //     github.getRepos($scope.user).then(onRepos, onError);
        // };
        //
        // var onRepos = function(data) {
        //     $scope.repos = data;
        // };

        var onError = function(reason) {
            $scope.error = 'Could not fetch the data.';
        };

        $scope.username = $routeParams.username;
        $scope.reponame = $routeParams.reponame;
        github.getRepo($scope.username, $scope.reponame).then(onRepoComplete, onError);
        // $scope.name = 'zboob';
        // $scope.$log = 'Repo de ouf';
    };

    myApp.controller('RepoController', RepoController);
})();
