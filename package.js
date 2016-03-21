Package.describe({
  name: 'osxi:annyang',
  version: '2.2.1',
  summary: 'Easy microphone speech recognition using JavaScript.',
  git: 'https://github.com/osxi/meteor-annyang.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('annyang.js');
  api.addFiles('annyang.min.js', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('osxi:annyang');
  api.addFiles('annyang-tests.js');
});
