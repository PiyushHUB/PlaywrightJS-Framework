// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    name: 'Microsoft Edge',
    use: {
        baseURL: 'http://localhost:3000',
        //browserName: 'chromium',
        channel: 'msedge',
        headless: false,
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        video: 'on-first-retry',
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure'
    },    
    testDir: 'tests',
    timeout: 600000,
    expect: {
        timeout: 10 * 10000,
    },
    reporter: [ ['junit', { outputFile: 'results.xml' }],
                ['html', { outputFolder: 'my-report' }] ],
    workers: 10
  };
  
  module.exports = config;
