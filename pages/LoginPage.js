
import { DialogUtils } from '../utils/dialogUtils';
export class LoginPage {
    constructor(page) {
        this.page = page;
        this.loginIcon = page.locator('#login2')
        this.usernameInput = page.locator('#loginusername');
        this.passwordInput = page.locator('#loginpassword');
        this.loginBtn = page.getByRole('button', { name: 'Log in' });
        this.welcomeUser = page.locator('#nameofuser');
        this.logOutButton = page.getByRole('link', { name: 'Log out' });

    }

   //   async gotoPage(){
   //      await this.page.goto('/');
   //   }

     async clickLoginUrl() {
        await this.loginIcon.click();
     }

     async fillLoginForm(uname, pwd) {
        await this.usernameInput.fill(uname);
        await this.passwordInput.fill(pwd);
     }

     async clickLoginButton() {
        await this.loginBtn.click();
     }

     async clickLoginButtonAndGetDialog() {
      const dialogPromise = DialogUtils.handleDialog(this.page);
      await this.loginBtn.click();
      return await dialogPromise;
     }

     async clickLogOutButton() {
        await this.logOutButton.click();
     }
     
   }