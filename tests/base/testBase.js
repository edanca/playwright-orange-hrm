import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { DashboardPage } from '../pages/dashboardPage';
import { ToolbarComponent } from '../components/toolbarComponent';


export const test = base.extend({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    dashboardPage: async ({ page }, use) => {
        const dashboardPage = new DashboardPage(page);
        await use(dashboardPage);
    },
    toolbarComponent: async ({ page }, use) => {
        const toolbarComponent = new ToolbarComponent(page);
        await use(toolbarComponent);
    },
});

export { expect } from '@playwright/test';