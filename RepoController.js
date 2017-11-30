(function() {

    var myApp = angular.module('myApp');

    var RepoController = function($scope, github, $routeParams) {
        onRepoComplete = function(data) {
            // $scope.user =
        };

        var onError = function(reason) {
            $scope.error = 'Could not fetch the data.';
        };

        $scope.username = $routeParams.username;
        $scope.reponame = $routeParams.reponame;
    };

    myApp.controller('RepoController', RepoController);

})();
