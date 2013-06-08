requirejs.config({
  paths : {
    'jquery': 'vendor/jquery-1.7.2.min'
  }
});
require([
  'jquery',
  'source-config'
],
function($, sourceConfig){
  requirejs.config(sourceConfig);
  
  require(
  ["modernizr", "widgets/snapnav", "prettify", 'prettify-css', "bootstrap", "widgets/userprefs-button"],
  function(Modernizr, snapNav, prettyPrint, prettifyCSS, bootstrap, userPrefsButton) {
      
    snapNav('.navbar', {
      header: 'body > header'
    });
      
    prettyPrint();
    
    bootstrap.carousel('.carousel', {
      interval : 3000
    });
    
    userPrefsButton('.user-options-btn');
    
  });
});

