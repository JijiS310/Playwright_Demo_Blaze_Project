# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginScenariosPOM.spec.js >> Test7: Add product to cart and verify
- Location: tests\loginScenariosPOM.spec.js:73:6

# Error details

```
ReferenceError: loginPage is not defined
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | import { ObjectManager } from '../pages/ObjectManager';
  3  | import inputData from '../utils/inputData.json';
  4  | 
  5  | test('Test1:Sign up with valid credentials', async ({ page }) => {
  6  | 
  7  |     const uniqueUsername = `${inputData.username}_${Date.now()}`;
  8  |     const pom = new ObjectManager(page);
  9  |     const signupPage = pom.getSignupPage();
  10 |     await signupPage.gotoPage();
  11 |     await signupPage.clickSignUpLink();
  12 |     await signupPage.fillSignUpForm(uniqueUsername, inputData.password);
  13 |     const dialogMessage = await signupPage.clickSignUpButton();
  14 |     expect(dialogMessage).toBe('Sign up successful.');
  15 | });
  16 | 
  17 | test.only('Test2:Sign up with Close button', async ({ page }) => {
  18 |    
  19 |     const pom = new ObjectManager(page);
  20 |     const signupPage = pom.getSignupPage();
  21 |     await signupPage.gotoPage();
  22 |     await signupPage.clickSignUpLink();
  23 |     await signupPage.fillSignUpForm(inputData.username, inputData.password);
  24 |     await expect(signupPage.getSignUpModalTitle()).toBeVisible();
  25 |     await signupPage.clickCloseButton();
  26 |     await expect(signupPage.getSignUpModalTitle()).toBeHidden();
  27 | });
  28 | 
  29 | test('Test3:Login with Valid Credentials', async ({ page }) => {
  30 |     
  31 |     const pom = new ObjectManager(page);
  32 |     const loginPage = pom.getLoginPage();
  33 |     await loginPage.gotoPage(); 
  34 |     await loginPage.clickLoginUrl();
  35 |     await loginPage.fillLoginForm(inputData.username, inputData.password);
  36 |     await loginPage.clickLoginButton();
  37 |     await expect(loginPage.welcomeUser).toHaveText(`Welcome ${inputData.username}`);
  38 | });
  39 | 
  40 | test('Test4:Login with Invalid Username', async ({ page }) => {
  41 | 
  42 |     const pom = new ObjectManager(page);
  43 |     const loginPage = pom.getLoginPage();  
  44 |     await loginPage.gotoPage();
  45 |     await loginPage.clickLoginUrl();
  46 |     await loginPage.fillLoginForm(inputData.invalidUsername, inputData.password);
  47 |     const dialogMessage = await loginPage.clickLoginButtonAndGetDialog();
  48 |     expect(dialogMessage).toBe('User does not exist.');
  49 | })
  50 | 
  51 | test('Test5:Login with invalid password', async ({page}) => {
  52 |    
  53 |     const pom = new ObjectManager(page);
  54 |     const loginPage = pom.getLoginPage();
  55 |     await loginPage.gotoPage();
  56 |     await loginPage.clickLoginUrl();
  57 |     await loginPage.fillLoginForm(inputData.username, inputData.invalidPassword);
  58 |     const dialogMessage = await loginPage.clickLoginButtonAndGetDialog();
  59 |     expect(dialogMessage).toBe('Wrong password.');
  60 | })
  61 | 
  62 | test('Test6:Login with invalid username and password', async ({page}) => {
  63 | 
  64 |     const pom = new ObjectManager(page);
  65 |     const loginPage = pom.getLoginPage();   
  66 |     await loginPage.gotoPage();
  67 |     await loginPage.clickLoginUrl();
  68 |     await loginPage.fillLoginForm(inputData.invalidUsername, inputData.invalidPassword);
  69 |     const dialogMessage = await loginPage.clickLoginButtonAndGetDialog();
  70 |     expect(dialogMessage).toBe('User does not exist.');
  71 | })
  72 | 
  73 | test.only('Test7: Add product to cart and verify', async ({page}) => {
  74 |     const pom = new ObjectManager(page);
> 75 |     await loginPage.gotoPage();
     |     ^ ReferenceError: loginPage is not defined
  76 |     await loginPage.clickLoginUrl();
  77 |     await loginPage.fillLoginForm(inputData.username, inputData.password);
  78 |     await loginPage.clickLoginButton();
  79 |     await homePage.clickProductLink();
  80 |     const dialogMessage = await cartPage.addToCart();
  81 |     expect(dialogMessage).toBe('Product added.');
  82 | 
  83 |     })
```