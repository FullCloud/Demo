define({
  paths: {
    'text': 'vendor/text',
    'domReady': 'vendor/domReady',
    'modernizr': 'vendor/modernizr-2.5.3.min',
    'jquery': 'vendor/jquery-1.7.2.min',
    'underscore': 'vendor/underscore-min',
    'backbone': 'vendor/backbone-min'
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
    }
  }
});