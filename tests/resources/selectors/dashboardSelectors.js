exports.DashboardSelectors = class DashboardSelectors {

    constructor() {
        this.dashboardHeader = 'h6:has-text("Dashboard")';
    }

    getDashboardHeader() { return this.dashboardHeader; }
}