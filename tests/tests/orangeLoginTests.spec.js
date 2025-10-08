import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { DashboardPage } from '../pages/dashboardPage';

const test = base.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage, loginPage);
  },
  dashboardPage: async ({ page }, use) => {
    const dashboardPage = new DashboardPage(page);
    await use(dashboardPage);
  },
});

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
});