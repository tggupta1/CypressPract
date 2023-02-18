const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 4000,
  pageLoadTimeout: 30000,

  e2e: {
    baseUrl: 'https://demoqa.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "reporter": "junit",
    "reporterOptions": {
      "mochaFile": "cypress/resultsJunit/results.xml",
      "toConsole": false
    },
    "reporter": "mochawesome",
    "reporterOptions": {
      "charts": true,
      "overwrite": false,
      "html": false,
      "json": true,
      "reportDir": "cypress/report/mochawesome-report"
    },
    "chromeWebSecurity": false,
    "defaultCommandTimeout": 10000,
    "execTimeout": 60000,
    "pageLoadTimeout": 60000,
    "requestTimeout": 15000,
    "responseTimeout": 15000
  },
  "env":{
    "url":"https://spicejet.com/"
  },
});


require('@applitools/eyes-cypress')(module);
