import {test} from '@playwright/test';
import { ObjectManager } from '../pages/ObjectManager';
import inputData from '../utils/inputData.json';



test('Sign up with valid credentials', async ({ page }) => {
    let pom = new ObjectManager(page);
    const signupPage = pom.getSignupPage(page);
    await signupPage.gotoPage();
    await signupPage.clickSignUpLink();
    await signupPage.fillSignUpForm(inputData.username, inputData.password);
    await signupPage.clickSignUpButton();
});

test('Sign up with Close button', async ({ page }) => {
    let pom = new ObjectManager(page);
    const signupPage = pom.getSignupPage(page);
    await signupPage.gotoPage();
    await signupPage.clickSignUpLink();
    await signupPage.fillSignUpForm(inputData.username, inputData.password);
    await signupPage.clickCloseButton();
});

test('Login with Valid Credentials', async ({ page }) => {
    let pom = new ObjectManager(page);
    const loginPage = pom.getLoginPage(page);
    await loginPage.gotoPage(); 
    await loginPage.clickLoginUrl();
    await loginPage.fillLoginForm(inputData.username, inputData.password);
    await loginPage.clickLoginButton();
    await loginPage.getWelcomeUserText(inputData.username);
})

test('Login with Invalid Username', async ({ page }) => {
    let pom = new ObjectManager(page);
    const loginPage = pom.getLoginPage(page);  
    await loginPage.gotoPage();
    await loginPage.clickLoginUrl();
    await loginPage.fillLoginForm(inputData.invalidUsername, inputData.password);
    await loginPage.getInvalidUserErrorMessage();
})

test('Login with invalid password', async ({page}) => {
    let pom = new ObjectManager(page);
    const loginPage = pom.getLoginPage(page);
    await loginPage.gotoPage();
    await loginPage.clickLoginUrl();
    await loginPage.fillLoginForm(inputData.username, inputData.invalidPassword);
    await loginPage.getInvalidPassErrorMessage();
})

test('Login with invalid username and password', async ({page}) => {
    let pom = new ObjectManager(page);
    const loginPage = pom.getLoginPage(page);   
    await loginPage.gotoPage();
    await loginPage.clickLoginUrl();
    await loginPage.fillLoginForm(inputData.invalidUsername, inputData.invalidPassword);
    await loginPage.getInvalidUserErrorMessage();
})