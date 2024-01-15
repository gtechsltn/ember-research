'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    // Add options here
  });

  // app.import('node_modules/popper.js/dist/umd/popper.js');
  // app.import('node_modules/popper.js/dist/umd/popper-utils.js');
  // app.import('node_modules/bootstrap/dist/js/bootstrap.js');
  app.import('node_modules/@fortawesome/fontawesome-free/css/all.css');
  app.import('node_modules/@fortawesome/fontawesome-free/js/all.js');

  return app.toTree();
};
