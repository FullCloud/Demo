define(function(require) {
    var $ = require('jquery');
    var coreConfig = require('./core-config');
    var bootstrapConfig = require('./bootstrap-config');
    var appConfig = require('./app-config');
    
    var config = $.extend(true, {}, coreConfig, bootstrapConfig, appConfig);
    return config;
})