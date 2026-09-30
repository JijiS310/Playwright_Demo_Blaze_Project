import { expect } from '@playwright/test';
export class LoginPage {
    constructor(page) {
        this.page = page;
        this.login = page.locator('#login2')
        this.usernameInput = page.locator('#loginusername');
        this.passwordInput = page.locator('#loginpassword');
        this.loginBtn = page.getByRole('button', { name: 'Log in' });
        this.welcomeUser = page.locator('#nameofuser');

    }

     async gotoPage(){
        await this.page.goto('/');
     }

     async clickLoginUrl() {
        await this.login.click();
     }

     async fillLoginForm(uname, pwd) {
        await this.usernameInput.fill(uname);
        await this.passwordInput.fill(pwd);
     }

     async clickLoginButton() {
        await this.loginBtn.click();
     }

     async getWelcomeUserText(uname) {
        await expect(this.welcomeUser).toHaveText(`Welcome ${uname}`);
     }  

     async getInvalidUserErrorMessage() {
        const dialogPromise = this.page.waitForEvent('dialog');
        await this.loginBtn.click();
        const dialog = await dialogPromise;
        console.log(`Dialog message: ${dialog.message()}`);
        expect(dialog.message()).toBe('User does not exist.');
        await dialog.accept();
     }

     

     async getInvalidPassErrorMessage() {
        const dialogPromise = this.page.waitForEvent('dialog');
        await this.loginBtn.click();
        const dialog = await dialogPromise;
        console.log(`Dialog message: ${dialog.message()}`);
         expect(dialog.message()).toBe('Wrong password.');
        await dialog.accept();
     }


}