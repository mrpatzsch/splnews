Package.describe({
  summary: 'Rank posts by tweet count',
version: '0.1.0',
name: 'telescope-tweets'
});

Package.onUse(function(api) {
  api.use([
    'jquery',
    'underscore',
    'templating',
    'fourseven:scss',
    'percolatestudio:synced-cron',
    'dandv:rate-limit'
    ]);

  api.add_files([
    'lib/main.js',
    ], ['client', 'server']);

  // client
  api.add_files([
    'lib/client/templates/custom_post_info.html'
    ], ['client']);
  // server
  api.add_files([
      'lib/server/cron.js',
      'lib/server/tweets.js'
      ], ['server']);

  api.export([
      'postModules'
  ]);
});
