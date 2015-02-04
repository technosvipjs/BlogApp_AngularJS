'use strict';

// the admin services module
angular.module("blogApp.admin.services", [])
    .factory("Post", ["$resource", function($resource) {

        return $resource("/api/posts/:id", { id : "@_id" }, {
            update : {
                method : "PUT"
            }
        });

    }])
    .service("popupService", ["$window", function($window) {

        // confirm message for
        // deleting post entirely
        this.showPopup = function(message) {
            return $window.confirm(message);
        };

    }]);