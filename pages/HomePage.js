export class HomePage{
    constructor(page, proName){ 
    this.page = page;
    this.productLink = page.getByRole('link', { name: 'Samsung galaxy s6' });
    this.phoneProductLink = page.getByRole('link', { name: 'Nokia lumia 1520' });
    this.phoneCategory = page.getByRole('link', { name: 'Phones' });
    this.monitorCategory = page.getByRole('link', { name: 'Monitors' });
    this.monitorProductLink = page.getByRole('link', { name: 'Apple monitor 24' });
    }

    async clickProductLink(){
        await this.productLink.click();
    }

    async clickPhoneProduct(){
        await this.phoneProductLink.click();
    }

    async clickPhoneCategory(){
        await this.phoneCategory.click();
    }

    async clickMonitorCategory(){
        await this.monitorCategory.click();
    }

    async clickMonitorProduct(){
        await this.monitorProductLink.click();
    }

}

