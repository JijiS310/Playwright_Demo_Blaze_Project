# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginScenariosPOM.spec.js >> Test2:Sign up with Close button
- Location: tests\loginScenariosPOM.spec.js:17:6

# Error details

```
ReferenceError: HomePage is not defined
```

# Test source

```ts
  1  | import {LoginPage} from '../pages/LoginPage';
  2  | import {SignupPage} from '../pages/SignupPage';
  3  | 
  4  | export class ObjectManager {
  5  |     constructor(page) {
  6  |         this.page = page;
  7  |         this.loginPage = new LoginPage(page);
  8  |         this.signupPage = new SignupPage(page);
> 9  |         this.homePage = new HomePage(page, inputData.productName);
     |                             ^ ReferenceError: HomePage is not defined
  10 |         this.cartPage = new CartPage(page);
  11 |     }
  12 | 
  13 |     getSignupPage() {
  14 |         return this.signupPage;
  15 |     }
  16 | 
  17 |     getLoginPage() {
  18 |         return this.loginPage;
  19 |     }
  20 | 
  21 |     getHomePage() {
  22 |         return this.homePage;
  23 |     }
  24 | 
  25 |     getCartPage() {
  26 |         return this.cartPage;
  27 |     }
  28 | 
  29 | }
```