# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginScenariosPOM.spec.js >> Test1:Sign up with valid credentials
- Location: tests\loginScenariosPOM.spec.js:5:6

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Sign up successful."
Received: undefined
```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
  2  | import { getDialogMessage } from '../utils/dialogUtils';
  3  | export class SignupPage {
  4  |     constructor(page) {
  5  |         this.page = page;
  6  |         this.signupLink = page.getByRole('link', { name: 'Sign up' });
  7  |         this.usernameInput = page.locator('#sign-username');
  8  |         this.passwordInput = page.locator('#sign-password');
  9  |         this.signUpBtn = page.getByRole('button', { name: 'Sign up' });
  10 |         this.closeBtn = page.locator('button.btn.btn-secondary:visible');
  11 |     }
  12 | 
  13 |     async gotoPage(){
  14 |         await this.page.goto('/');
  15 |     }
  16 | 
  17 |     async clickSignUpLink() {
  18 |         await this.signupLink.click();
  19 |     }
  20 | 
  21 |     async fillSignUpForm(uname, pwd) {
  22 |         await this.usernameInput.fill(uname);
  23 |         await this.passwordInput.fill(pwd);
  24 |     }
  25 | 
  26 |     async clickSignUpButton() {
  27 | 
  28 |         return await getDialogMessage(this.page, async () => {
  29 |         const message = await this.signUpBtn.click();
> 30 |         expect(message).toBe('Sign up successful.');
     |                         ^ Error: expect(received).toBe(expected) // Object.is equality
  31 |     });
  32 |         // const dialogPromise = this.page.waitForEvent('dialog');
  33 |         // await this.signUpBtn.click();
  34 |         // const dialog = await dialogPromise;
  35 |         // console.log(`Dialog message: ${dialog.message()}`);
  36 |         // expect(dialog.message()).toBe('Sign up successful.');
  37 |         // await dialog.accept();
  38 |     }
  39 | 
  40 | 
  41 |     async clickCloseButton() {
  42 |         await this.closeBtn.click();
  43 |     }
  44 | }
```