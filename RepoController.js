(function() {

    var myApp = angular.module('myApp');

    var RepoController = function($scope, github, $routeParams) {
        onRepoComplete = function(data) {
            // $scope.user =
        }
        $scope.username = $routeParams.username;
        $scope.reponame = $routeParams.reponame;
    };

    myApp.controller('RepoController', RepoController);

})();
