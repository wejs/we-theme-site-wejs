/**
 * @module  Theme
 * @name    we-theme-themes
 */

module.exports = {
  // theme config
  configs: {
    // sails views
    views: {
      path: 'templates/server',
      layout: 'templates/server/layouts/default.hbs'
    },

    emberTemplates: {
      path: 'templates/ember',
    },

    emailTemplates: {
      path: 'templates/email',
    },

    assetsFolderToCopy: 'assets/**/*',

    javascript: 'dist/scripts.js',
    stylesheet: 'dist/style.css'
  }
};
