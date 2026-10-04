import { expect } from '@playwright/test';
export class CheckoutPage{
    constructor(page){
        this.page = page;
        this.nameInput = page.locator('#name');
        this.countryInput = page.locator('#country');
        this.cityInput = page.locator('#city');
        this.creditCardInput = page.locator('#card');
        this.monthInput = page.locator('#month');
        this.yearInput = page.locator('#year');
        this.purchaseButton = page.getByRole('button', { name: 'Purchase' }); 
        this.orderModal = page.locator('div.sweet-alert.showSweetAlert.visible')
        this.successMessage = this.orderModal.locator('h2');
        this.orderNumber = this.orderModal.locator('p').nth(0);
        this.OkButton = this.orderModal.getByRole('button', { name: 'OK' });
        //this.successMessage = page.getByText('Thank you for your purchase!', { exact: true })
    
    }

    async fillCheckoutForm(name, country, city, creditCard, month, year){
        await this.nameInput.fill(name);
        await this.countryInput.fill(country);
        await this.cityInput.fill(city);
        await this.creditCardInput.fill(creditCard);
        await this.monthInput.fill(month);
        await this.yearInput.fill(year);
    }

    async clickPurchaseButton(){
        await this.purchaseButton.click();
    }

    async getPurchaseConfirmation(){
        await expect(this.orderModal).toBeVisible();
        const purchaseMessage = await this.successMessage.textContent();
        console.log('Purchase confirmation message is : ' + purchaseMessage);
        expect(purchaseMessage).toContain('Thank you for your purchase!');
        const orderDetails = await this.orderNumber.textContent();
        console.log('Order details are : ' + orderDetails);

    }

    async clickOkButton(){
        await this.OkButton.click();
    }



}