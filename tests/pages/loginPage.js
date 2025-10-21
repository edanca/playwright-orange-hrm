import { PageBase } from "../base/pageBase";
import { LoginSelectors } from "../resources/selectors/pages/loginSelectors";
import { Paths } from "../base/paths";

exports.LoginPage = class LoginPage extends PageBase {
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

    async getInvalidCredentialsMessage() {
        return await this.page.locator(this.loginSelectors.getInvalidCredentialsMessage());
    }
}