requirejs.config({
    paths: {
        'jquery': 'vendor/jquery'
    }
});
require(['jquery', 'source-config'],

function($, sourceConfig) {
    requirejs.config(sourceConfig);

    require(["modernizr", "parse", "prettify", 'prettify-css', "bootstrap", "widgets/userprefs-button"],
    function(Modernizr, Parse, prettyPrint, prettifyCSS, bootstrap, userPrefsButton) {
        
        Parse.initialize("YPiaMGCQUS3OwwsSPT3E55sqDAcHTRP12W4U2Bh3", "qNkaA6WUZy4WrCcmPnJ5RZmLEh0oPmKHMXSlaB6i");
        prettyPrint();

        bootstrap.carousel('.carousel', {
            interval: 3000
        });

        userPrefsButton('.user-btn');
    });
});
