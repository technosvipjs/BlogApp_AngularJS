'use strict';

// the admin filters module
angular.module("blogApp.admin.filters", [])
    // permalink filter
    .filter("permalink", [function() {
        return function(input) {
            return input ? input.toLowerCase().split(" ").join("-") : "";
        };
    }])
    // word count filter
    .filter("wordCount", [function() {
        return function(input) {
            return input ? input.split(" ").length : 0;
        };
    }]);