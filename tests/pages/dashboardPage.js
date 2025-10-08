import { BasePage } from "../base/basePage";
import { DashboardSelectors } from "../resources/selectors/dashboardSelectors";

exports.DashboardPage = class DashboardPage extends BasePage {
    constructor(page) {
        super()
        this.page = page;
        this.dashboardSelectors = new DashboardSelectors();
    }

    async navigate() {
        await this.page.goto(this.paths.getDashboardPage);
    }

    async getDashboardHeader() {
        return await this.page.locator(this.dashboardSelectors.getDashboardHeader());
    }  
};