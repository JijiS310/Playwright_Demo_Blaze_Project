import { DialogUtils } from '../utils/dialogUtils';
export class SignupPage {
    constructor(page) {
        this.page = page;
        this.signupLink = page.getByRole('link', { name: 'Sign up' });
        this.usernameInput = page.locator('#sign-username');
        this.passwordInput = page.locator('#sign-password');
        this.signUpBtn = page.getByRole('button', { name: 'Sign up' });
        this.closeBtn = page.locator('button.btn.btn-secondary:visible');
        this.signUpModalTitle = page.locator('#signInModalLabel');
    }

    async gotoPage(){
        await this.page.goto('/');
    }

    async clickSignUpLink() {
        await this.signupLink.click();
    }

    async fillSignUpForm(uname, pwd) {
        await this.usernameInput.fill(uname);
        await this.passwordInput.fill(pwd);
    }

    async clickSignUpButton() {
    const dialogPromise = DialogUtils.handleDialog(this.page);
    await this.signUpBtn.click();
    return await dialogPromise;
}


    async clickCloseButton() {

        await this.closeBtn.click();
    }

    getSignUpModalTitle() {
    return this.signUpModalTitle
}

}
