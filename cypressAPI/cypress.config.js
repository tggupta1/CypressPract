const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "chromeWebSecurity": false,
    "defaultCommandTimeout":10000,
    "execTimeout":60000,
    "pageLoadTimeout":60000,
    "requestTimeout":15000,
    "responseTimeout":15000,
    //"baseUrl":"https://reqres.in/api"
    "baseUrl":"https://flask-rest-api-demo.herokuapp.com/",
    "watchForFileChanges":false
  },
});
