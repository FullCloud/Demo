define({
    paths: {
        'parse': 'vendor/parse',
        'md5': 'vendor/md5',
        'jquery-gravatar': 'vendor/jquery-plugins/jquery.gravatar',
        'prettify': 'vendor/prettify/prettify',
        'prettify-css': 'vendor/prettify/lang-css',
        'UserPrefs-model': 'app/models/userprefs',
        'UserPrefs-view': 'app/views/userprefs'
    },
    shim: {
        'parse': {
            exports: 'Parse'
        },
        'md5': {
            exports: 'hex_md5'
        },
        'jquery-gravatar': {
            deps: ['jquery', 'md5'],
            exports: 'jQuery.gravatar'
        },
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