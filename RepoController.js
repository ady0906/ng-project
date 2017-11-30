(function() {

    var myApp = angular.module('myApp');

    var RepoController = function($scope, $routeParams, $log, github) {
        onRepoComplete = function(data) {
            // $scope.user =
        }

        var onError = function(reason) {
            $scope.error = 'Could not fetch the data.';
        };

        $scope.username = $routeParams.username;
        $scope.reponame = $routeParams.reponame;
        $scope.name = 'zboob';
        $scope.$log = 'Repo de ouf';
    };

    myApp.controller('RepoController', RepoController);
})();
