import { expect } from '@playwright/test';
export class SignupPage {
    constructor(page) {
        this.page = page;
        this.signupLink = page.getByRole('link', { name: 'Sign up' });
        this.usernameInput = page.locator('#sign-username');
        this.passwordInput = page.locator('#sign-password');
        this.signUpBtn = page.getByRole('button', { name: 'Sign up' });
        this.closeBtn = page.locator('button.btn.btn-secondary:visible');
    }

    async gotoPage(){
        await this.page.goto('https://www.demoblaze.com/');
    }

    async clickSignUpLink() {
        await this.signupLink.click();
    }

    async fillSignUpForm(uname, pwd) {
        await this.usernameInput.fill(uname);
        await this.passwordInput.fill(pwd);
    }

    async clickSignUpButton() {
        const dialogPromise = this.page.waitForEvent('dialog');
        await this.signUpBtn.click();
        const dialog = await dialogPromise;
        console.log(`Dialog message: ${dialog.message()}`);
        expect(dialog.message()).toBe('Sign up successful.');
        await dialog.accept();
    }

    async clickCloseButton() {
        await this.closeBtn.click();
    }
}