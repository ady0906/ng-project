(function() {
    var myApp = angular.module("myApp", []);
    myApp.controller("MainController", function($scope, $http) {

        var onUserComplete = function(response) {
            $scope.user = response.data;
        };

        $http.get("https://api.github.com/users/robconery")
             .then(onUserComplete);
        $scope.message = "Hello, Angular!";
    });
}());
