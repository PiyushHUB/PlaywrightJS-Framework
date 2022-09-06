const { test, expect } = require('@playwright/test');
const { Demo } = require('../Pageobjects/Demo');

/*test.describe.configure({ mode: 'parallel' });*/

test('Registration Validation8', async ({ page }) => {
    const demo = new Demo(page);
    await demo.Register();
   /* await expect(demo.MMBTitle_div).toHaveText(['Manage myBusiness']);*/
  });

  test('Excel and api validation8', async ({ page }) => {
    const demo = new Demo(page);
    await demo.common_func();
  });