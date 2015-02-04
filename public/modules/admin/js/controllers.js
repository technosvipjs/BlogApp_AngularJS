'use strict';

// the admin controllers module
angular.module("blogApp.admin.controllers", [])
    .controller("AdminController", ["$scope", function($scope) {

    }])
    .controller("PostCreationController", ["$scope", "$state", "Post",
        function($scope, $state, Post) {

            $scope.post = {};

            // set button text
            $scope.buttonText = "Add";

            // add post
            $scope.savePost = function(post) {

                $scope.buttonText = "Adding...";

                post = new Post(post);

                post.$save(function() {
                    $state.go("admin.postViewAll");
                });
            };

    }])
    .controller("PostUpdateController", ["$scope", "$state", "$stateParams", "Post",
        function($scope, $state, $stateParams, Post) {

            // current post
            $scope.post = Post.get({ id :  $stateParams.id });

            // set button text
            $scope.buttonText = "Update";

            // update post
            $scope.updatePost = function(post) {

                $scope.buttonText = "Updating...";

                post.$update(function() {
                    $state.go("admin.postViewAll");
                });
            };

    }])
    .controller("PostListController", ["$scope", "$state", "Post", "popupService",
        function($scope, $state, Post, popupService) {

            // all posts
            $scope.posts = Post.query();

            // delete post
            $scope.deletePost = function(post) {
                if(popupService.showPopup("Are you sure?")) {
                    post.$remove(function() {
                        $state.go("admin.postViewAll", undefined, {
                            reload : true
                        });
                    });
                }
            };


    }]);