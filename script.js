(function() {
    var myApp = angular.module("myApp", []);
    myApp.controller("MainController", ["$scope", function($scope) {
            // var onUserComplete = function(response) {
            //     $scope.user = response.data
            // }
        $scope.message = "Hello, Angular!";
    }]);
}());
