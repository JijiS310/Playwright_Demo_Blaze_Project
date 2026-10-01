// @ts-check
import { defineConfig, devices } from '@playwright/test';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  timeout: 40*1000,
  expect:{         //timeout for assertions
    timeout: 50*1000 
  },

  /* Run tests in files in parallel */
 // fullyParallel: true,
  /* Retry on failure */
  //retries: 1,
 // workers: 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['allure-playwright']
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: 'https://www.demoblaze.com/',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
   // trace: 'on-first-retry',
   // headless: true,
  },

  /* Configure projects for major browsers */

  projects:[
    {
    name:'chromeProject', //ourchoice name
    use: {
    browserName:'chromium',
    headless: false,
    screenshot:'only-on-failure',
    video:'retain-on-failure',
    trace:'retain-on-failure'
  },
  },
// {
//   name:'firefoxProject', //ourchoice name
//     use: {
//     browserName:'firefox',
//     headless: false,
//     screenshot:'only-on-failure',
//     video:'retain-on-failure',
//     trace:'retain-on-failure'
// }
// },
// {
//     name:'webkit',
//     use: {
//     browserName:'webkit',
//     headless: false,
//     screenshot:'only-on-failure',
//     video:'retain-on-failure',
//     trace:'retain-on-failure'
  
// }
// }
 ],

  // projects: [
  //   {
  //     name: 'chromium',
  //     use: { ...devices['Desktop Chrome'] },
      
  //   }

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  // ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

