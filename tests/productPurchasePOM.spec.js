import {test} from '../fixtures/fixture.js';
import {expect} from '@playwright/test'
import inputData from '../utils/inputData.json';


    test.use({ credentials: { username: inputData.username, password: inputData.password } });

    for (const { category, productName, purchase } of inputData.products) {

        test(`Test 7, 8 and 9 : purchase ${productName} under ${category}`, async ({ pom, login }) => {

        const homePage = pom.getHomePage(); 
        if (category){
            await homePage.clickCategory(category);
        }
        await homePage.clickProductLink(productName);

        const productPage = pom.getProductPage();
        const dialogMessage = await productPage.addToCart();
        expect(dialogMessage).toBe('Product added.');

        const cartPage = pom.getCartPage();
        await cartPage.gotoCartPage();
        await cartPage.getProductNameInCart(productName);
        if (!purchase){
            await cartPage.removeAllProducts()
            return
        };

        await cartPage.clickPlaceOrderButton();
        const checkoutPage = pom.getCheckoutPage();
        await checkoutPage.fillCheckoutForm(inputData.name, inputData.country, inputData.city, inputData.creditCard, inputData.month, inputData.year);
        await checkoutPage.clickPurchaseButton();
        await checkoutPage.getPurchaseConfirmation();
        await checkoutPage.clickOkButton();
        })
    }

