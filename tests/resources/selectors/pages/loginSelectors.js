exports.LoginSelectors = class LoginSelectors {

    constructor() {
        this.usernameInput = 'input[name="username"]';
        this.passwordInput = 'input[name="password"]';;
        this.loginButton = 'button[type="submit"]';
        this.invalidCredentialsMessage = '.oxd-alert-content-text';
    }

    getUsernameInput() { return this.usernameInput; }
    getPasswordInput() { return this.passwordInput; }
    getLoginButton() { return this.loginButton; }
    getInvalidCredentialsMessage() { return this.invalidCredentialsMessage; }
}