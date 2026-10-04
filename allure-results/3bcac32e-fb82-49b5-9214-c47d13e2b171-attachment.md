# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: productPurchasePOM.spec.js >> Test 8 : Add product under phone and purchase
- Location: tests\productPurchasePOM.spec.js:25:6

# Error details

```
Test timeout of 40000ms exceeded.
```

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('tr.success').locator('td').first()
Expected: "Nokia lumia 1520"
Received: ""

Call log:
  - Expect "toHaveText" with timeout 50000ms
  - waiting for locator('tr.success').locator('td').first()
    15 × locator resolved to <td>…</td>
       - unexpected value ""
  - Test timeout of 40000ms exceeded.

```

```yaml
- cell:
  - img
```

# Test source

```ts
  1  | import { expect } from "@playwright/test";
  2  | export class CartPage {
  3  |     constructor(page){
  4  |         this.page = page;
  5  |         this.cartLink = page.getByRole('link', { name: 'Cart', exact: true });
  6  |         this.productInCart = page.locator('tr.success').locator('td').nth(0)
  7  |         this.placeOrderButton = page.getByRole('button', { name: 'Place Order' })
  8  |     
  9  |     }
  10 | 
  11 |     async gotoCartPage(){
  12 |         await this.cartLink.click();
  13 |     }
  14 | 
  15 |     async getProductNameInCart(){
  16 |         const cartProName=  await this.productInCart.textContent();
> 17 |         await expect(this.productInCart).toHaveText('Nokia lumia 1520');
     |                                          ^ Error: expect(locator).toHaveText(expected) failed
  18 |         console.log('Product in cart is : ' + cartProName);
  19 |     }
  20 | 
  21 |     async clickPlaceOrderButton(){
  22 |         await this.placeOrderButton.click();
  23 |     }
  24 | 
  25 | 
  26 | 
  27 | }
```