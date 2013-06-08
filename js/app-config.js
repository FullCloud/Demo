define({
  paths: {
    'prettify': 'vendor/prettify/prettify',
    'prettify-css': 'vendor/prettify/lang-css',
    'UserPrefs-model': 'app/models/userprefs',
    'UserPrefs-view': 'app/views/userprefs'
  },
  shim: {
    'prettify': {
        deps: [],
        exports: 'prettyPrint'
    },
    'prettify-css': {
        deps: ['prettify'],
        exports: 'PR'
    }
  }
});