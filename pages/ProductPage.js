import { DialogUtils } from '../utils/dialogUtils';
export class ProductPage{
    constructor(page){
        this.page = page;
        this.addToCartBtn = page.getByText('Add to cart');
}

async addToCart(){
    const dialogPromise = DialogUtils.handleDialog(this.page);
    await this.addToCartBtn.click();
    return await dialogPromise;
}
}