import {test} from '@playwright/test';
import { ObjectManager } from '../pages/ObjectManager';
import inputData from '../utils/inputData.json';

test('Test1:Sign up with valid credentials', async ({ page }) => {

    const uniqueUsername = `${inputData.username}_${Date.now()}`;
    const pom = new ObjectManager(page);
    const signupPage = pom.getSignupPage();
    await signupPage.gotoPage();
    await signupPage.clickSignUpLink();
    await signupPage.fillSignUpForm(uniqueUsername, inputData.password);
    await signupPage.clickSignUpButton();
});

test('Test2:Sign up with Close button', async ({ page }) => {
   
    const pom = new ObjectManager(page);
    const signupPage = pom.getSignupPage();
    await signupPage.gotoPage();
    await signupPage.clickSignUpLink();
    await signupPage.fillSignUpForm(inputData.username, inputData.password);
    await signupPage.clickCloseButton();
});

test('Test3:Login with Valid Credentials', async ({ page }) => {
    
    const pom = new ObjectManager(page);
    const loginPage = pom.getLoginPage();
    await loginPage.gotoPage(); 
    await loginPage.clickLoginUrl();
    await loginPage.fillLoginForm(inputData.username, inputData.password);
    await loginPage.clickLoginButton();
    await loginPage.getWelcomeUserText(inputData.username);
})

test('Test4:Login with Invalid Username', async ({ page }) => {

    const pom = new ObjectManager(page);
    const loginPage = pom.getLoginPage();  
    await loginPage.gotoPage();
    await loginPage.clickLoginUrl();
    await loginPage.fillLoginForm(inputData.invalidUsername, inputData.password);
    await loginPage.getInvalidUserErrorMessage();
})

test('Test5:Login with invalid password', async ({page}) => {
   
    const pom = new ObjectManager(page);
    const loginPage = pom.getLoginPage();
    await loginPage.gotoPage();
    await loginPage.clickLoginUrl();
    await loginPage.fillLoginForm(inputData.username, inputData.invalidPassword);
    await loginPage.getInvalidPassErrorMessage();
})

test('Test6:Login with invalid username and password', async ({page}) => {

    const pom = new ObjectManager(page);
    const loginPage = pom.getLoginPage();   
    await loginPage.gotoPage();
    await loginPage.clickLoginUrl();
    await loginPage.fillLoginForm(inputData.invalidUsername, inputData.invalidPassword);
    await loginPage.getInvalidUserErrorMessage();
})