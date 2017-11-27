(function() {

    var app = angular.module("myApp", ["ngRoute"]);

    app.config(function($routeProvider) {
        $routeProvider
            .when("/main", {
                templateUrl: "main.html",
                controller: "MainController"
            })
            .when("/user/:username", {
                templateUrl: "user.html",
                controller: "UserController"
            })
            .when("/repo/:username/:reponame", {
                templateUrl: "repo.html",
                controller: "RepoController"
            })
            // 2 http calls needed
                // api.github.com/repos/username/reponame
                // Get collaborators with api.github.com/repos/username/reponame/contributors
            .otherwise({redirectTo: "/main"});
    });

}());
