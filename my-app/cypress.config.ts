/* eslint-disable no-unused-vars */
module.exports = {
  videoUploadOnPasses: false,
  e2e: {
  specPattern : "**/cypress/integration/*.spec.ts",
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(_on, _config) {
      // ...
    },
    baseUrl: 'http://localhost:3003',
  },
};