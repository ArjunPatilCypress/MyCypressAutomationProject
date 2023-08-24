const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //projectId: '7vkgjo',
  projectId: '5bnhk5',
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: "https://ecommerce-playground.lambdatest.io",
  },

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
});
