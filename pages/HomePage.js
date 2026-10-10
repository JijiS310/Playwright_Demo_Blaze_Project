export class HomePage{
    constructor(page){ 
    this.page = page;
    
    }
     async clickCategory(category) {
    await this.page.getByRole('link', { name: category, exact: true }).click();
  }

  async clickProductLink(productName) {
    await this.page.locator('h4.card-title').getByRole('link', { name: productName, exact: true }).click();
  }

}

