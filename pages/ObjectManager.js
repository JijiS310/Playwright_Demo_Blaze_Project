import {LoginPage} from '../pages/LoginPage';
import {SignupPage} from '../pages/SignupPage';

export class ObjectManager {
    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.signupPage = new SignupPage(page);
    }

    getSignupPage() {
        return this.signupPage;
    }

    getLoginPage() {
        return this.loginPage;
    }

}