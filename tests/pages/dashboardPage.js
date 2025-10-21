import { PageBase } from "../base/pageBase";
import { DashboardSelectors } from "../resources/selectors/pages/dashboardSelectors";

exports.DashboardPage = class DashboardPage extends PageBase {
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