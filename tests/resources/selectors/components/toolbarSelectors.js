exports.ToolbarSelectors = class ToolbarSelectors {

    constructor() {
        this.toolbarHeaderText = 'h6:has-text("Dashboard")';
        this.toolbar = 'tag=header';
        this.profileButton = '.oxd-userdropdown-tab';
        this.upgradeButton = 'Upgrade'; // byRole
    }

    getToolbarHeaderText() { return this.toolbarHeaderText; }
    getToolbar() { return this.toolbar; }
    getProfileButton() { return this.profileButton; }
    getUpgradeButton() { return this.upgradeButton; }
}