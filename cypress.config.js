const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.google.com",
    env: {
      password: process.env.PASSWORD
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
