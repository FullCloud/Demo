define({
  paths: {
    'jasmine' : 'lib/jasmine-1.2.0/jasmine',
    'jasmine-html' : 'lib/jasmine-1.2.0/jasmine-html',
    'specs-list' : 'spec/specs-list'
  },
  shim : {
    'jasmine' : {
      exports : 'jasmine'
    },
    'jasmine-html' : {
      deps: ['jasmine'],
      exports: 'jasmine'
    },
  }
});