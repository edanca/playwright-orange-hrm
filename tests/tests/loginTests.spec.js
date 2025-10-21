import { test, expect } from '../base/testBase.js';

test.describe('OrangeHRM Login Tests', () => {

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigate();
  })

  test('OrangeHRM login test', async ({ page, loginPage, dashboardPage }) => {
    await loginPage.enterUsername('Admin');
    await loginPage.enterPassword('admin123');
    await loginPage.clickLoginButton();
    
    const dashboardHeader = await dashboardPage.getDashboardHeader();
    await expect(dashboardHeader).toBeVisible();
  });

  test('OrangeHRM invalid login test', async ({ page, loginPage }) => {
    await loginPage.enterUsername('InvalidUser');
    await loginPage.enterPassword('InvalidPass');
    await loginPage.clickLoginButton();
    
    const invalidCredentialsMessage = await loginPage.getInvalidCredentialsMessage();
    await expect(invalidCredentialsMessage).toBeVisible();
    await expect(invalidCredentialsMessage).toHaveText('Invalid credentials');
  });
});