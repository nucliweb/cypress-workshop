const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '2couhy',
  experimentalWebKitSupport: true,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    includeShadowDom: true,
    // excludeSpecPattern: ['**/1-getting-started/**', '**/2-advanced-examples/**'],
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
