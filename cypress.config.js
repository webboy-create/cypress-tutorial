const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : "https://www.konga.com",
    // pageLoadTimeout: 10000,
    // requestTimeout: 10000,
    // defaultCommandTimeout: 10000,
    waitForAnimations: false,
    watchForFileChanges: false,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
