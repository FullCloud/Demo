requirejs.config({
    paths: {
        'jquery': 'vendor/jquery'
    }
});
require(['jquery', 'source-config'],

function($, sourceConfig) {
    requirejs.config(sourceConfig);

    require(["modernizr", "backbone", "parse", "widgets/carousel", "bootstrap", "widgets/userprefs-button", "domReady"],
    function(Modernizr, Backbone, Parse, Carousel, bootstrap, userPrefsButton, domReady) {
        
        Parse.initialize("YPiaMGCQUS3OwwsSPT3E55sqDAcHTRP12W4U2Bh3", "qNkaA6WUZy4WrCcmPnJ5RZmLEh0oPmKHMXSlaB6i");
        var query = new Parse.Query(Parse.User);
        query.find({
            success: function(users) {
                domReady(function(){
                    var usersDisplay = new Carousel({
                        el: '.usersdisplay',
                        collection: new Backbone.Collection(_.map(users, function(item){ return item.toJSON(); }))
                    });
                    usersDisplay.render();
                });
            }
        });

        userPrefsButton('.user-btn');
    });
});
