import {LoginPage} from '../pages/LoginPage';
import {SignupPage} from '../pages/SignupPage';
import {HomePage} from '../pages/HomePage';
import {CartPage} from '../pages/CartPage';
import {ProductPage} from '../pages/ProductPage';
import { CheckoutPage } from '../pages/CheckoutPage';

export class ObjectManager {
    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.signupPage = new SignupPage(page);
        this.homePage = new HomePage(page);
        this.productPage = new ProductPage(page);
        this.cartPage = new CartPage(page);
        this.checkoutPage = new CheckoutPage(page);
    }

    getSignupPage() {
        return this.signupPage;
    }

    getLoginPage() {
        return this.loginPage;
    }

    getHomePage() {
        return this.homePage;
    }

    getProductPage() {
        return this.productPage;
    }

    getCartPage() {
        return this.cartPage;
    }

    getCheckoutPage() {
        return this.checkoutPage;
    }

}