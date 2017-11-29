(function(){
    var github = function($http) {
        var getUser = function(username) {
            return $http
                .get('https://api.github.com/users/' + username)
                .then(function(response) {
                    return response.data;
                });
        };

        var getRepos = function(user) {
            return $http
                .get(user.repos_url)
                .then(function(response) {
                    return response.data;
                });
        }

        var getRepo = function(user, repo) {
            return $http
                .get('https://api.github.com/repos/' + user + '/' + repo)
                .then(function(response) {
                    return response.data;
                });
        }

        return {
            getUser: getUser,
            getRepos: getRepos
        };
    };
    // Getting reference to exisiting module
    var module = angular.module("myApp");

    // Using factory method by passing name of service + parameters that passes function
    module.factory("github", github);

}());
