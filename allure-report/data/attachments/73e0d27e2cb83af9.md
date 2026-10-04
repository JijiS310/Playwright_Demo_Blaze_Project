# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginScenariosPOM.spec.js >> Sign up with valid credentials
- Location: tests\loginScenariosPOM.spec.js:8:5

# Error details

```
ReferenceError: baseURL is not defined
```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
  2  | export class SignupPage {
  3  |     constructor(page) {
  4  |         this.page = page;
  5  |         this.signupLink = page.getByRole('link', { name: 'Sign up' });
  6  |         this.usernameInput = page.locator('#sign-username');
  7  |         this.passwordInput = page.locator('#sign-password');
  8  |         this.signUpBtn = page.getByRole('button', { name: 'Sign up' });
  9  |         this.closeBtn = page.locator('button.btn.btn-secondary:visible');
  10 |     }
  11 | 
  12 |     async gotoPage(){
> 13 |         await this.page.goto(baseURL);
     |                              ^ ReferenceError: baseURL is not defined
  14 |     }
  15 | 
  16 |     async clickSignUpLink() {
  17 |         await this.signupLink.click();
  18 |     }
  19 | 
  20 |     async fillSignUpForm(uname, pwd) {
  21 |         await this.usernameInput.fill(uname);
  22 |         await this.passwordInput.fill(pwd);
  23 |     }
  24 | 
  25 |     async clickSignUpButton() {
  26 |         const dialogPromise = this.page.waitForEvent('dialog');
  27 |         await this.signUpBtn.click();
  28 |         const dialog = await dialogPromise;
  29 |         console.log(`Dialog message: ${dialog.message()}`);
  30 |         await dialog.accept();
  31 |         return dialog.message();
  32 |     }
  33 | 
  34 |     async verifySignUpSucess(){
  35 |         expect(dialog.message()).toBe('Sign up successful.');
  36 |     }
  37 | 
  38 |     async clickCloseButton() {
  39 |         await this.closeBtn.click();
  40 |     }
  41 | }
```