# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginScenariosPOM.spec.js >> Sign up with Close button
- Location: tests\loginScenariosPOM.spec.js:17:5

# Error details

```
TypeError: Cannot read properties of undefined (reading 'usernamePrefix')
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
> 18 |     const uniqueUsername = `${inputData.signup.usernamePrefix}_${Date.now()}`;
     |                                                ^ TypeError: Cannot read properties of undefined (reading 'usernamePrefix')
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
  52 |     await loginPage.fillLoginForm(uniqueUsername, inputData.invalidPassword);
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