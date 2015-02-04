'use strict';

// the post module
angular.module("blogApp.posts", [
        "blogApp.posts.controllers",
        "blogApp.posts.directives",
        "blogApp.posts.services"
    ])
    .run(["$state", function($state) {
        $state.go("allPosts");
    }])
    .config(["$stateProvider", function($stateProvider) {
        $stateProvider
            .state("allPosts", {
                url : "/posts",
                templateUrl : "modules/posts/views/posts.html",
                controller : "PostController"
            })
            .state("singlePost", {
                url : "/posts/:id/:permalink",
                templateUrl : "modules/posts/views/singlePost.html",
                controller : "PostDetailsController"
            })
    }]);