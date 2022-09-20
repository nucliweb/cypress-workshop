const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '2couhy',
  e2e: {
    includeShadowDom: true,
    excludeSpecPattern: ['**/1-getting-started/**', '**/2-advanced-examples/**'],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
