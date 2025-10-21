import { test, expect } from '../base/testBase.js';

test.describe('OrangeHRM Dashboard Tests', () => {

  test.beforeEach(async ({ loginPage, dashboardPage }) => {
    await loginPage.navigate();
    await loginPage.enterUsername('Admin');
    await loginPage.enterPassword('admin123');
    await loginPage.clickLoginButton();
  })

  test('OrangeHRM toolbar component test', async ({ page, toolbarComponent }) => {
    const toolbar = await toolbarComponent.getToolbar();
    await expect(toolbar).toBeVisible();

    const toolbarHeaderText = await toolbarComponent.getToolbarHeaderText();
    await expect(toolbarHeaderText).toBeVisible();
    await expect(toolbarHeaderText).toHaveText('Dashboard');

    const profileButton = await toolbarComponent.getProfileButton();
    await expect(profileButton).toBeVisible();

    const upgradeButton = await toolbarComponent.getUpgradeButton();
    await expect(upgradeButton).toBeVisible();
    await expect(upgradeButton).toHaveText('Upgrade');
  });
});