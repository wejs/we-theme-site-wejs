/**
 * @module  Theme
 * @name    we-theme-site-wejs
 */

module.exports = {
  // theme config
  configs: {
    // server views
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
    javascript: 'dist/scripts.js',
    stylesheet: 'dist/style.css'
  }
};
