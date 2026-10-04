# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: productPurchasePOM.spec.js >> Test 9: Add product under Monitor and purchase
- Location: tests\productPurchasePOM.spec.js:45:6

# Error details

```
Test timeout of 40000ms exceeded.
```

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('tr.success').locator('td').first()
Expected substring: "Apple monitor 24"
Received string:    ""

Call log:
  - Expect "toContainText" with timeout 50000ms
  - waiting for locator('tr.success').locator('td').first()
    35 × locator resolved to <td>…</td>
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
  15 |     async getProductNameInCart(phProName){
  16 |         const cartProName=  await this.productInCart.textContent();
  17 |         console.log('Product in cart is : ' + cartProName);
> 18 |         await expect(this.productInCart).toContainText(phProName);
     |                                          ^ Error: expect(locator).toContainText(expected) failed
  19 |         
  20 |     }
  21 | 
  22 |     async clickPlaceOrderButton(){
  23 |         await this.placeOrderButton.click();
  24 |     }
  25 | 
  26 | 
  27 | 
  28 | }
```