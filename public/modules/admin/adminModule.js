'use strict';

// the admin module
angular.module("blogApp.admin", [
        "blogApp.admin.controllers",
        "blogApp.admin.filters",
        "blogApp.admin.services"
    ])
    .config(["$stateProvider", function($stateProvider) {
        $stateProvider
            .state("admin", {
                url : "/admin",
                abstract : true,
                controller : "AdminController",
                templateUrl : "modules/admin/views/admin-home.html"
            })
            .state("admin.postNew", {
                url : "/posts/new",
                controller : "PostCreationController",
                templateUrl : "modules/admin/views/admin-new-post.html"
            })
            .state("admin.postUpdate", {
                url : "/posts/:id/edit",
                controller : "PostUpdateController",
                templateUrl : "modules/admin/views/admin-update-post.html"
            })
            .state("admin.postViewAll", {
                url : "",
                controller : "PostListController",
                templateUrl : "modules/admin/views/admin-all-posts.html"
            });
    }]);