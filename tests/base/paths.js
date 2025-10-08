exports.Paths = class Paths {
    constructor() {
        this.baseUrl = 'https://opensource-demo.orangehrmlive.com';
    }

    get getLoginPage() { return `${this.baseUrl}/web/index.php/auth/login` }
    get getDashboardPage() { return `${this.baseUrl}/web/index.php/dashboard/index` }
}