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
  ["modernizr", "prettify", 'prettify-css', "bootstrap", "widgets/userprefs-button"],
  function(Modernizr, prettyPrint, prettifyCSS, bootstrap, userPrefsButton) {
      
    prettyPrint();
    
    bootstrap.carousel('.carousel', {
      interval : 3000
    });
    
    userPrefsButton('.user-options-btn');
    
  });
});

