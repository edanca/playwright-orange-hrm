import { PageBase } from "../base/pageBase.js";
import { ToolbarSelectors } from "../resources/selectors/components/toolbarSelectors.js";

exports.ToolbarComponent = class ToolbarComponent extends PageBase {
    constructor(page) {
        super()
        this.page = page;
        this.toolbarSelectors = new ToolbarSelectors();
    }

    async getToolbarHeaderText() {
        return await this.page.locator(this.toolbarSelectors.getToolbarHeaderText());
    }

    async getToolbar() {
        return await this.page.locator(this.toolbarSelectors.getToolbar());
    }

    async getProfileButton() {
        return await this.page.locator(this.toolbarSelectors.getProfileButton());
    }

    async getUpgradeButton() {
        return await this.page.getByRole('button', { name: this.toolbarSelectors.getUpgradeButton() });
    }
};