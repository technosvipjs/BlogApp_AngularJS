'use strict';

// the post directives module
angular.module("blogApp.posts.directives", [])
    // blog comments directive
    .directive("postComments", [function() {
        return {
            restrict : "AE",
            templateUrl : "modules/posts/views/comments.html",
            scope : {
                postInstance : "="
            },
            link : function(scope, element, attrs) {

                // save comment
                scope.saveComment = function(comment) {
                    scope.postInstance.comments.unshift(comment);
                    scope.postInstance.$update();
                    scope.comment = {};
                };
            }
        };
    }]);