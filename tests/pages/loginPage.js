import { BasePage } from "../base/basePage.js";
import { LoginSelectors } from "../resources/selectors/loginSelectors.js";
import { Paths } from "../base/paths.js";

exports.LoginPage = class LoginPage extends BasePage {
    constructor(page) {
        super()
        this.page = page;
        this.loginSelectors = new LoginSelectors();
        this.paths = new Paths();
    }

    async navigate() {
        await this.page.goto(this.paths.getLoginPage);
    }

    async enterUsername(username) {
        await this.page.fill(this.loginSelectors.getUsernameInput(), username);
    }

    async enterPassword(password) {
        await this.page.fill(this.loginSelectors.getPasswordInput(), password);
    }

    async clickLoginButton() {
        await this.page.click(this.loginSelectors.getLoginButton());
    }

    async getErrorMessage() {
        return await this.page.textContent(this.loginSelectors.getErrorMessage());
    }
}