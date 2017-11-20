(function() {
    var myApp = angular.module('myApp', []);
    // Passing in array of dependencies

    var MainController = function($scope, $http) {

        var onUserComplete = function(response) {
            $scope.user = response.data;
        };

        var onError = function(reason) {
            $scope.error = 'Could not fetch the user';
        };

        $http
            .get('https://api.github.com/users/angular')
            .then(onUserComplete, onError);
        $scope.username = "angular";
        $scope.message = "GitHub viewer";
    }

    myApp.controller("MainController", ["$scope", "$http", MainController]);
})();
