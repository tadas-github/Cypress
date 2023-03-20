import { defineConfig } from 'cypress'

export default defineConfig({
  video: false,
  e2e: {
    supportFile: './cypress/support/pages/index.ts',
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    defaultCommandTimeout: 10000,
    baseUrl: 'https://www.britishairways.com',
    viewportWidth: 1440,
    viewportHeight: 800,
  },
})
