# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginScenariosPOM.spec.js >> Login with invalid password
- Location: tests\loginScenariosPOM.spec.js:47:5

# Error details

```
ReferenceError: uniqueUsername is not defined
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - navigation [ref=e2]:
    - link "PRODUCT STORE" [ref=e3] [cursor=pointer]:
      - /url: index.html
    - list [ref=e6]:
      - listitem [ref=e7]:
        - link "Home (current)" [ref=e8] [cursor=pointer]:
          - /url: index.html
          - text: Home
          - generic [ref=e9]: (current)
      - listitem [ref=e10]:
        - link "Contact" [ref=e11] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=e12]:
        - link "About us" [ref=e13] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=e14]:
        - link "Cart" [ref=e15] [cursor=pointer]:
          - /url: cart.html
      - listitem [ref=e16]:
        - link "Log in" [active] [ref=e17] [cursor=pointer]:
          - /url: "#"
      - listitem
      - listitem
      - listitem [ref=e18]:
        - link "Sign up" [ref=e19] [cursor=pointer]:
          - /url: "#"
    - generic [ref=e21]:
      - list [ref=e22]:
        - listitem [ref=e23] [cursor=pointer]
        - listitem [ref=e24] [cursor=pointer]
        - listitem [ref=e25] [cursor=pointer]
      - img "First slide" [ref=e28]
      - button "Previous" [ref=e29] [cursor=pointer]
      - button "Next" [ref=e32] [cursor=pointer]
  - generic [ref=e36]:
    - generic [ref=e38]:
      - link "CATEGORIES" [ref=e39] [cursor=pointer]:
        - /url: ""
      - link "Phones" [ref=e40] [cursor=pointer]:
        - /url: "#"
      - link "Laptops" [ref=e41] [cursor=pointer]:
        - /url: "#"
      - link "Monitors" [ref=e42] [cursor=pointer]:
        - /url: "#"
    - list [ref=e45]:
      - listitem [ref=e46]:
        - button "Previous" [ref=e47]
      - listitem [ref=e48]:
        - button "Next" [ref=e49] [cursor=pointer]
  - generic [ref=e51]:
    - generic [ref=e54]:
      - heading "About Us" [level=4] [ref=e55]
      - paragraph [ref=e56]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=e59]:
      - heading "Get in Touch" [level=4] [ref=e60]
      - paragraph [ref=e61]: "Address: 2390 El Camino Real"
      - paragraph [ref=e62]: "Phone: +440 123456"
      - paragraph [ref=e63]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=e67]
  - contentinfo [ref=e69]:
    - paragraph [ref=e70]: Copyright © Product Store
```

# Test source

```ts
  1  | import {test} from '@playwright/test';
  2  | import { ObjectManager } from '../pages/ObjectManager';
  3  | import inputData from '../utils/inputData.json';
  4  | 
  5  | 
  6  | 
  7  | test('Sign up with valid credentials', async ({ page }) => {
  8  |     const uniqueUsername = `${inputData.signup.usernamePrefix}_${Date.now()}`;
  9  |     let pom = new ObjectManager(page);
  10 |     const signupPage = pom.getSignupPage(page);
  11 |     await signupPage.gotoPage();
  12 |     await signupPage.clickSignUpLink();
  13 |     await signupPage.fillSignUpForm(uniqueUsername, inputData.password);
  14 |     await signupPage.clickSignUpButton();
  15 | });
  16 | 
  17 | test('Sign up with Close button', async ({ page }) => {
  18 |     const uniqueUsername = `${inputData.signup.usernamePrefix}_${Date.now()}`;
  19 |     let pom = new ObjectManager(page);
  20 |     const signupPage = pom.getSignupPage(page);
  21 |     await signupPage.gotoPage();
  22 |     await signupPage.clickSignUpLink();
  23 |     await signupPage.fillSignUpForm(uniqueUsername, inputData.password);
  24 |     await signupPage.clickCloseButton();
  25 | });
  26 | 
  27 | test('Login with Valid Credentials', async ({ page }) => {
  28 |     const uniqueUsername = `${inputData.signup.usernamePrefix}_${Date.now()}`;
  29 |     let pom = new ObjectManager(page);
  30 |     const loginPage = pom.getLoginPage(page);
  31 |     await loginPage.gotoPage(); 
  32 |     await loginPage.clickLoginUrl();
  33 |     await loginPage.fillLoginForm(uniqueUsername, inputData.password);
  34 |     await loginPage.clickLoginButton();
  35 |     await loginPage.getWelcomeUserText(uniqueUsername);
  36 | })
  37 | 
  38 | test('Login with Invalid Username', async ({ page }) => {
  39 |     let pom = new ObjectManager(page);
  40 |     const loginPage = pom.getLoginPage(page);  
  41 |     await loginPage.gotoPage();
  42 |     await loginPage.clickLoginUrl();
  43 |     await loginPage.fillLoginForm(inputData.invalidUsername, inputData.password);
  44 |     await loginPage.getInvalidUserErrorMessage();
  45 | })
  46 | 
  47 | test('Login with invalid password', async ({page}) => {
  48 |     let pom = new ObjectManager(page);
  49 |     const loginPage = pom.getLoginPage(page);
  50 |     await loginPage.gotoPage();
  51 |     await loginPage.clickLoginUrl();
> 52 |     await loginPage.fillLoginForm(uniqueUsername, inputData.invalidPassword);
     |                                   ^ ReferenceError: uniqueUsername is not defined
  53 |     await loginPage.getInvalidPassErrorMessage();
  54 | })
  55 | 
  56 | test('Login with invalid username and password', async ({page}) => {
  57 |     let pom = new ObjectManager(page);
  58 |     const loginPage = pom.getLoginPage(page);   
  59 |     await loginPage.gotoPage();
  60 |     await loginPage.clickLoginUrl();
  61 |     await loginPage.fillLoginForm(inputData.invalidUsername, inputData.invalidPassword);
  62 |     await loginPage.getInvalidUserErrorMessage();
  63 | })
```