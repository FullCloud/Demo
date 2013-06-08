requirejs.config({
  paths : {
    'jasmine' : 'lib/jasmine-1.2.0/jasmine',
    'jasmine-html' : 'lib/jasmine-1.2.0/jasmine-html',
    'text' : '../js/vendor/text',
    'UserPrefs-model' : '../js/backbone/models/userprefs',
    'UserPrefs-view' : '../js/backbone/views/userprefs',
    // 'domReady': '../js/vendor/domReady',
    // 'modernizr': '../js/vendor/modernizr-2.5.3.min',
    'jquery': '../js/vendor/jquery-1.7.2.min',
    'underscore': '../js/vendor/underscore-min',
    'backbone': '../js/vendor/backbone-min',
    // 'prettify-css': '../js/vendor/prettify/lang-css',
    // 'bootstrap-alert': '../js/vendor/bootstrap/bootstrap-alert',
    // 'bootstrap-button': '../js/vendor/bootstrap/bootstrap-button',
    // 'bootstrap-carousel': '../js/vendor/bootstrap/bootstrap-carousel',
    // 'bootstrap-collapse': '../js/vendor/bootstrap/bootstrap-collapse',
    // 'bootstrap-dropdown': '../js/vendor/bootstrap/bootstrap-dropdown',
    // 'bootstrap-modal': '../js/vendor/bootstrap/bootstrap-modal',
    // 'bootstrap-popover': '../js/vendor/bootstrap/bootstrap-popover',
    // 'bootstrap-scrollspy': '../js/vendor/bootstrap/bootstrap-scrollspy',
    // 'bootstrap-tab': '../js/vendor/bootstrap/bootstrap-tab',
    // 'bootstrap-tooltip': '../js/vendor/bootstrap/bootstrap-tooltip',
    // 'bootstrap-transition': '../js/vendor/bootstrap/bootstrap-transition',
    // 'bootstrap-typeahead': '../js/vendor/bootstrap/bootstrap-typeahead',
    // 'bootstrap': '../js/vendor/bootstrap/bootstrap',
    // 'prettify': '../js/vendor/prettify/prettify'
  },
  shim : {
    'jasmine' : {
      //deps: ['underscore', 'jquery'],
      exports : 'jasmine'
    },
    'jasmine-html' : {
      deps: ['jasmine'],
      exports: 'jasmine'
    },
    // 'modernizr': {
    // exports: 'Modernizr'
    // },
    'underscore': {
    exports: '_'
    },
    'backbone': {
    deps: ['underscore', 'jquery'],
    exports: 'Backbone'
    },
    // 'prettify': {
    // deps: [],
    // exports: 'prettyPrint'
    // },
    // 'prettify-css': {
    // deps: ['prettify'],
    // exports: 'PR'
    // },
    // 'bootstrap-alert': {
    // deps: ['jquery', 'bootstrap-transition'],
    // exports: 'jQuery.fn.alert'
    // },
    // 'bootstrap-button': {
    // deps: ['jquery'],
    // exports: 'jQuery.fn.button'
    // },
    // 'bootstrap-carousel': {
    // deps: ['jquery', 'bootstrap-transition'],
    // exports: 'jQuery.fn.carousel'
    // },
    // 'bootstrap-collapse': {
    // deps: ['jquery'],
    // exports: 'jQuery.fn.collapse'
    // },
    // 'bootstrap-dropdown': {
    // deps: ['jquery'],
    // exports: 'jQuery.fn.dropdown'
    // },
    // 'bootstrap-modal': {
    // deps: ['jquery'],
    // exports: 'jQuery.fn.modal'
    // },
    // 'bootstrap-popover': {
    // deps: ['jquery', 'bootstrap-tooltip'],
    // exports: 'jQuery.fn.popover'
    // },
    // 'bootstrap-scrollspy': {
    // deps: ['jquery'],
    // exports: 'jQuery.fn.scrollspy'
    // },
    // 'bootstrap-tabs': {
    // deps: ['jquery'],
    // exports: 'jQuery.fn.tabs'
    // },
    // 'bootstrap-tooltip': {
    // deps: ['jquery'],
    // exports: 'jQuery.fn.tooltip'
    // },
    // 'bootstrap-transition': {
    // deps: ['jquery'],
    // exports: 'jQuery.fn.transition'
    // },
    // 'bootstrap-typeahead': {
    // deps: ['jquery'],
    // exports: 'jQuery.fn.typeahead'
    // }
  }
}); 