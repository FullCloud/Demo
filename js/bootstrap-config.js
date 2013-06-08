// Dependency: jQuery
define({
  paths: {
    'bootstrap-alert': 'vendor/bootstrap/bootstrap-alert',
    'bootstrap-button': 'vendor/bootstrap/bootstrap-button',
    'bootstrap-carousel': 'vendor/bootstrap/bootstrap-carousel',
    'bootstrap-collapse': 'vendor/bootstrap/bootstrap-collapse',
    'bootstrap-dropdown': 'vendor/bootstrap/bootstrap-dropdown',
    'bootstrap-modal': 'vendor/bootstrap/bootstrap-modal',
    'bootstrap-popover': 'vendor/bootstrap/bootstrap-popover',
    'bootstrap-scrollspy': 'vendor/bootstrap/bootstrap-scrollspy',
    'bootstrap-tab': 'vendor/bootstrap/bootstrap-tab',
    'bootstrap-tooltip': 'vendor/bootstrap/bootstrap-tooltip',
    'bootstrap-transition': 'vendor/bootstrap/bootstrap-transition',
    'bootstrap-typeahead': 'vendor/bootstrap/bootstrap-typeahead',
    'bootstrap': 'vendor/bootstrap/bootstrap'
  },
  shim: {
    'bootstrap-alert': {
        deps: ['jquery', 'bootstrap-transition'],
        exports: 'jQuery.fn.alert'
    },
    'bootstrap-button': {
        deps: ['jquery'],
        exports: 'jQuery.fn.button'
    },
    'bootstrap-carousel': {
        deps: ['jquery', 'bootstrap-transition'],
        exports: 'jQuery.fn.carousel'
    },
    'bootstrap-collapse': {
        deps: ['jquery'],
        exports: 'jQuery.fn.collapse'
    },
    'bootstrap-dropdown': {
        deps: ['jquery'],
        exports: 'jQuery.fn.dropdown'
    },
    'bootstrap-modal': {
        deps: ['jquery'],
        exports: 'jQuery.fn.modal'
    },
    'bootstrap-popover': {
        deps: ['jquery', 'bootstrap-tooltip'],
        exports: 'jQuery.fn.popover'
    },
    'bootstrap-scrollspy': {
        deps: ['jquery'],
        exports: 'jQuery.fn.scrollspy'
    },
    'bootstrap-tabs': {
        deps: ['jquery'],
        exports: 'jQuery.fn.tabs'
    },
    'bootstrap-tooltip': {
        deps: ['jquery'],
        exports: 'jQuery.fn.tooltip'
    },
    'bootstrap-transition': {
        deps: ['jquery'],
        exports: 'jQuery.fn.transition'
    },
    'bootstrap-typeahead': {
        deps: ['jquery'],
        exports: 'jQuery.fn.typeahead'
    }
  }
});