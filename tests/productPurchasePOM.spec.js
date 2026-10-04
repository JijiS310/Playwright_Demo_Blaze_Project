import {test,expect} from '@playwright/test';
import { ObjectManager } from '../pages/ObjectManager';
import inputData from '../utils/inputData.json';

test.beforeEach('Test3:Login with Valid Credentials', async ({ page }) => {
    
    const pom = new ObjectManager(page);
    const loginPage = pom.getLoginPage();
    await loginPage.gotoPage(); 
    await loginPage.clickLoginUrl();
    await loginPage.fillLoginForm(inputData.username, inputData.password);
    await loginPage.clickLoginButton();
    await expect(loginPage.welcomeUser).toHaveText(`Welcome ${inputData.username}`);
});

test('Test7: Add product to cart and verify', async ({page}) => {
    const pom = new ObjectManager(page);
    const homePage = pom.getHomePage();
    await homePage.clickProductLink(inputData.productName);
    const productPage = pom.getProductPage();
    const dialogMessage = await productPage.addToCart();
    expect(dialogMessage).toBe('Product added.');
    })

test('Test 8 : Add product under phone and purchase', async ({page}) => {
    const pom = new ObjectManager(page);
    const homePage = pom.getHomePage(); 
    await homePage.clickPhoneCategory();
    await homePage.clickPhoneProduct();
    const productPage = pom.getProductPage();
    const dialogMessage = await productPage.addToCart();
    expect(dialogMessage).toBe('Product added.');
    const cartPage = pom.getCartPage();
    await cartPage.gotoCartPage();
    await cartPage.getProductNameInCart(inputData.phoneProductName);
    await cartPage.clickPlaceOrderButton();
    const checkoutPage = pom.getCheckoutPage();
    await checkoutPage.fillCheckoutForm(inputData.name, inputData.country, inputData.city, inputData.creditCard, inputData.month, inputData.year);
    await checkoutPage.clickPurchaseButton();
    await checkoutPage.getPurchaseConfirmation();
    await checkoutPage.clickOkButton();

})

test('Test 9: Add product under Monitor and purchase', async ({page}) => {
    const pom = new ObjectManager(page);
    const homePage = pom.getHomePage();
    await homePage.clickMonitorCategory();
    await homePage.clickMonitorProduct();
    const productPage = pom.getProductPage();
    const dialogMessage = await productPage.addToCart();
    expect(dialogMessage).toBe('Product added.');
    const cartPage = pom.getCartPage();
    await cartPage.gotoCartPage();
    await cartPage.getProductNameInCart(inputData.monitorProductName);
    await cartPage.clickPlaceOrderButton();
    const checkoutPage = pom.getCheckoutPage();
    await checkoutPage.fillCheckoutForm(inputData.name, inputData.country, inputData.city, inputData.creditCard, inputData.month, inputData.year);
    await checkoutPage.clickPurchaseButton();
    await checkoutPage.getPurchaseConfirmation();
    await checkoutPage.clickOkButton();

})