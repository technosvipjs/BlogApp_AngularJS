'use strict';

// an application module
angular.module("blogApp", [
    "ngAnimate",
    "ngResource",
    "pascalprecht.translate",
    "ui.router",
    "blogApp.posts",
    "blogApp.admin"
]).config(["$translateProvider", "translationsSource",
        function($translateProvider, translationsSource) {

            $translateProvider.translations("en", translationsSource["en"]);

            $translateProvider.translations('de', translationsSource["de"]);

            $translateProvider.preferredLanguage("en");

    }]).run(["$state", "$rootScope", "languagePreference",
        function($state, $rootScope, languagePreference) {

            $state.go("allPosts");

            $rootScope.languagePreference = languagePreference.getPreferences();

            $rootScope.languagePreference.isActiveLanguage = languagePreference.isActiveLanguage;

            $rootScope.languagePreference.switchLanguage = languagePreference.switchLanguage;

    }]);