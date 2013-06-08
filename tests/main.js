requirejs.config({
  paths : {
    'jquery': '../js/vendor/jquery-1.7.2.min'
  }
});

require([
  '../js/source-config',
  'test-config'
],
function(sourceConfig, testConfig){
  var pathToSourceFiles = '../js';
  var pathToTestFiles = '../tests/'
  
  sourceConfig.baseUrl = '../js';
  requirejs.config(sourceConfig);
  
  require(['underscore'], function(_){
    testConfig.paths = _.reduce(testConfig.paths, function(pathsObj, path, moduleName){
      pathsObj[moduleName] = pathToTestFiles + path;
      return pathsObj;
    }, {});
    
    requirejs.config(testConfig);
    
    require(["jasmine", "specs-list", "jasmine-html"], function(jasmine, specsList) {
      require(specsList,
      function(){
        
          var jasmineEnv = jasmine.getEnv();
          jasmineEnv.updateInterval = 1000;
    
          var htmlReporter = new jasmine.HtmlReporter();
    
          jasmineEnv.addReporter(htmlReporter);
    
          jasmineEnv.specFilter = function(spec) {
            return htmlReporter.specFilter(spec);
          };
    
          var currentWindowOnload = window.onload;
    
          window.onload = function() {
            if (currentWindowOnload) {
              currentWindowOnload();
            }
            execJasmine();
          };
    
          function execJasmine() {
            jasmineEnv.execute();
          }
          
      });
    
    });
    
  });
  
});