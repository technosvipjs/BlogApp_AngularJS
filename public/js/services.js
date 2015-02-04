'use strict';

angular.module("blogApp")
    // translations
    .constant("translationsSource", {
        en : {
            TITLE : "The Single Page Blogger",
            SUBTITLE: "One Stop Blogging Solution",
            COMMENTS: "Comments",
            BY:"By",
            ADD:"Add"
        },
        de : {
            TITLE: "Single Page Blogger",
            SUBTITLE: "Die Komplettlösung für Ihr Blog",
            COMMENTS: "Kommentare",
            BY:"Von",
            ADD:"Hinzufügen"
        }
    })
    // language preferences
    .factory("languagePreference", ["$translate", function($translate) {

        // language preferences data
        var data = { currentLanguage : "en" };

        // get language preferences data
        function getPreferences() {
            return data;
        }

        // what language is active
        function isActiveLanguage(key) {
            return data.currentLanguage === key;
        }

        // switch language
        function switchLanguage(key) {
            $translate.use(key);
            data.currentLanguage = key;
        }

        return {
            getPreferences : getPreferences,
            isActiveLanguage : isActiveLanguage,
            switchLanguage : switchLanguage
        };

    }]);