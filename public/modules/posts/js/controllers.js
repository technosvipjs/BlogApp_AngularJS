'use strict';

// the post controllers module
angular.module("blogApp.posts.controllers", [])
    .controller("PostController", ["$scope", "Post",
        function($scope, Post) {

            // all posts
            $scope.posts = Post.query();

    }])
    .controller("PostDetailsController", ["$scope", "$state",
        "$stateParams", "Post",
        function($scope, $state, $stateParams, Post) {

            // set single post
            $scope.singlePost = Post.get({ id : $stateParams.id });

            // close post and
            // go to all posts state
            $scope.closePost = function() {
                $state.go("allPosts");
            };

    }]);