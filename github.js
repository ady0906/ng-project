(function(){
    var github = function($http) {
        var getUser = function(username) {
            return $http
                .get('https://api.github.com/users/' + username)
                .then(function(response) {
                    return response.data;
                });
        };
        return {

        };
    };
    // Getting reference to exisiting module
    var module = angular.module("githubViewer");

}());
