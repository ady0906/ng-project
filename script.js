//
// var MainController = function($scope, $http) {
//
//     var onUserComplete = function(response) {
//         $scope.user = response.data
//     }
//     $scope.message = "Hello, Angular!";
// };

(function() {
    angular.module('myApp', []).controller('MainController', function($scope) {
            var onUserComplete = function(response) {
                $scope.user = response.data
            }
        $scope.message = "Hello, Angular!";
    });
}());
