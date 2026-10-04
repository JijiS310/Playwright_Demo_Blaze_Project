import { expect } from "@playwright/test";
export class CartPage {
    constructor(page){
        this.page = page;
        this.cartLink = page.getByRole('link', { name: 'Cart', exact: true });
        this.productInCart = page.locator('tr.success').locator('td').nth(1)
        this.placeOrderButton = page.getByRole('button', { name: 'Place Order' })
    
    }

    async gotoCartPage(){
        await this.cartLink.click();
    }

    async getProductNameInCart(phProName){
        const cartProName=  await this.productInCart.textContent();
        console.log('Product in cart is : ' + cartProName);
        await expect(this.productInCart).toContainText(phProName);
        
    }

    async clickPlaceOrderButton(){
        await this.placeOrderButton.click();
    }



}