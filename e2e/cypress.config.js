import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.env.FRONTEND_URL = process.env.FRONTEND_URL;
    },
  },
});
