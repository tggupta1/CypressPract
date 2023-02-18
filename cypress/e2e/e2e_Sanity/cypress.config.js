const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://demoqa.com/'
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  "pageLoadTimeout":15000,
  "execTimeout":15000
});
