(function() {
    var myApp = angular.module('myApp', []);
    // Passing in array of dependencies
    myApp.controller('MainController', function($scope, $http) {
        var onUserComplete = function(response) {
            $scope.user = response.data;
        };

        var onError = function(reason) {
            $scope.error = 'Could not fetch the user';
        };

        $http
            .get('https://api.github.com/users/robconery')
            .then(onUserComplete, onError);
        $scope.message = 'Hello, Angular!';
    });
})();
