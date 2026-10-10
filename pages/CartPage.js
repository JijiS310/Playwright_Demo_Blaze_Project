import { expect } from "@playwright/test";
export class CartPage {
    constructor(page){
        this.page = page;
        this.cartLink = page.getByRole('link', { name: 'Cart', exact: true });
        this.productInCart = page.locator('tr.success').locator('td').nth(1)
        this.placeOrderButton = page.getByRole('button', { name: 'Place Order' })
        this.deleteButton = page.getByText('Delete')
    
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

    async removeAllProducts() {

    while (await this.deleteButton.count() > 0) {
        console.log('Delete count:', await this.deleteButton.count());
        const initialCount = await this.deleteButton.count();
        await this.deleteButton.first().click();
        await expect(this.deleteButton).toHaveCount(initialCount - 1);
    }
}



}