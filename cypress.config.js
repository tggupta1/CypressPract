const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "znrnd9",
  e2e: {
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
    "url":"https://www.amazon.in"
  },
});
