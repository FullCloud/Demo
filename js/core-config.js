define({
  paths: {
    'text': 'vendor/text',
    'domReady': 'vendor/domReady',
    'modernizr': 'vendor/modernizr-2.5.3.min',
    'jquery': 'vendor/jquery',
    'underscore': 'vendor/underscore-min',
    'backbone': 'vendor/backbone-min',
    'handlebars': 'vendor/handlebars'
  },
  shim: {
    'modernizr': {
      exports: 'Modernizr'
    },
    'underscore': {
      exports: '_'
    },
    'backbone': {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
    },
    'handlebars': {
        exports:'Handlebars'
    }
  }
});