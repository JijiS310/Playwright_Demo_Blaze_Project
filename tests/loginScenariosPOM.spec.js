import {test,expect} from '@playwright/test';
import { ObjectManager } from '../pages/ObjectManager';
import inputData from '../utils/inputData.json';

test('Test1:Sign up with valid credentials', async ({ page }) => {

    const uniqueUsername = `${inputData.username}_${Date.now()}`;
    const pom = new ObjectManager(page);
    const signupPage = pom.getSignupPage();
    await signupPage.gotoPage();
    await signupPage.clickSignUpLink();
    await signupPage.fillSignUpForm(uniqueUsername, inputData.password);
    const dialogMessage = await signupPage.clickSignUpButton();
    expect(dialogMessage).toBe('Sign up successful.');
});

test.only('Test2:Sign up with Close button', async ({ page }) => {
   
    const pom = new ObjectManager(page);
    const signupPage = pom.getSignupPage();
    await signupPage.gotoPage();
    await signupPage.clickSignUpLink();
    await signupPage.fillSignUpForm(inputData.username, inputData.password);
    await expect(signupPage.getSignUpModalTitle()).toBeVisible();
    await signupPage.clickCloseButton();
    await expect(signupPage.getSignUpModalTitle()).toBeHidden();
});

test('Test3:Login with Valid Credentials', async ({ page }) => {
    
    const pom = new ObjectManager(page);
    const loginPage = pom.getLoginPage();
    await loginPage.gotoPage(); 
    await loginPage.clickLoginUrl();
    await loginPage.fillLoginForm(inputData.username, inputData.password);
    await loginPage.clickLoginButton();
    await expect(loginPage.welcomeUser).toHaveText(`Welcome ${inputData.username}`);
});

test('Test4:Login with Invalid Username', async ({ page }) => {

    const pom = new ObjectManager(page);
    const loginPage = pom.getLoginPage();  
    await loginPage.gotoPage();
    await loginPage.clickLoginUrl();
    await loginPage.fillLoginForm(inputData.invalidUsername, inputData.password);
    const dialogMessage = await loginPage.clickLoginButtonAndGetDialog();
    expect(dialogMessage).toBe('User does not exist.');
})

test('Test5:Login with invalid password', async ({page}) => {
   
    const pom = new ObjectManager(page);
    const loginPage = pom.getLoginPage();
    await loginPage.gotoPage();
    await loginPage.clickLoginUrl();
    await loginPage.fillLoginForm(inputData.username, inputData.invalidPassword);
    const dialogMessage = await loginPage.clickLoginButtonAndGetDialog();
    expect(dialogMessage).toBe('Wrong password.');
})

test('Test6:Login with invalid username and password', async ({page}) => {

    const pom = new ObjectManager(page);
    const loginPage = pom.getLoginPage();   
    await loginPage.gotoPage();
    await loginPage.clickLoginUrl();
    await loginPage.fillLoginForm(inputData.invalidUsername, inputData.invalidPassword);
    const dialogMessage = await loginPage.clickLoginButtonAndGetDialog();
    expect(dialogMessage).toBe('User does not exist.');
})