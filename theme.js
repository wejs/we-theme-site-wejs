/**
 * @module  Theme
 * @name    we-theme-site-wejs
 */

module.exports = {
  // theme config
  configs: {
    emailTemplates: {
      path: 'templates/email',
    },
    javascript: 'files/public/scripts.js',
    stylesheet: 'files/public/style.css'
  },

  autoLoadAllTemplates: true,
  // will be auto loaded
  templates: {},
  // set layouts here
  layouts: {
    'default': {
      template: __dirname + '/templates/server/layout.hbs',
      regions: {
        highlighted: {
          name: 'Highlighted'
        },
        sidebar: {
          name: 'Sidebar'
        }
      }
    },
    'wejsdoc': {
      template: __dirname + '/templates/server/layouts/wejsdoc.hbs',
      regions: {
        highlighted: {
          name: 'Highlighted'
        },
        afterContent: {
          name: 'After content'
        },
        sidebar: {
          name: 'Sidebar'
        }
      }
    },
    'home': {
      template: __dirname + '/templates/server/layouts/home.hbs',
      regions: {
        highlighted: {
          name: 'Highlighted'
        },
        afterContent: {
          name: 'After content'
        }
      }
    },
    'fullwidth': {
      template: __dirname + '/templates/server/layouts/full-width-layout.hbs',
      regions: {
        highlighted: {
          name: 'Highlighted'
        }
      }
    }
  },
  widgets: {}
};