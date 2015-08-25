Package.describe({
  summary: 'Telescope custom package – use as template for your own packages',
  version: '0.1.0',
  name: 'custom-package'
});

Package.onUse(function (api) {

  // ---------------------------------- 1. Core dependency -----------------------------------
  api.use([
    // core dependencies
    'telescope:core@0.22.2',
    'telescope:theme-base@0.22.2',
    'telescope:theme-hubble@0.22.2',
  ]);

  // ---------------------------------- 2. Files to include ----------------------------------

  // i18n config (must come first)

  // client & server

  api.addFiles([
    'lib/template_modules.js',
    'lib/callbacks.js'
  ], ['client', 'server']);

  // client

  api.addFiles([
    // 'lib/client/templates/custom_upvote.html',
    'lib/client/templates/custom_post_info.html',
    'lib/client/templates/custom_user_menu.html',
    'lib/client/templates/custom_user_menu.js',
    'lib/client/templates/custom_post_admin.html',
    'lib/client/templates/custom_post_avatars.html',
    'lib/client/templates/custom_users_dashboard.html',
    'lib/client/templates/custom_meta.html',
    'lib/client/stylesheets/custom.scss',
  ], ['client']);

});