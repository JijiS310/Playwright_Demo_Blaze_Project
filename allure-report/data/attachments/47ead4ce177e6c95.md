# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: productPurchasePOM.spec.js >> Test 8 : Add product under phone and purchase
- Location: tests\productPurchasePOM.spec.js:25:6

# Error details

```
ReferenceError: expect is not defined
```

# Page snapshot

```yaml
- generic [active] [ref=f3e1]:
  - text:             
  - navigation [ref=f3e2]:
    - generic [ref=f3e3]:
      - link "PRODUCT STORE" [ref=f3e4] [cursor=pointer]:
        - /url: index.html
      - list [ref=f3e7]:
        - listitem [ref=f3e8]:
          - link "Home (current)" [ref=f3e9] [cursor=pointer]:
            - /url: index.html
            - text: Home
            - generic [ref=f3e10]: (current)
        - listitem [ref=f3e11]:
          - link "Contact" [ref=f3e12] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f3e13]:
          - link "About us" [ref=f3e14] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f3e15]:
          - link "Cart" [ref=f3e16] [cursor=pointer]:
            - /url: "#"
        - listitem
        - listitem [ref=f3e17]:
          - link "Log out" [ref=f3e18] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f3e19]:
          - link "Welcome JijiRej" [ref=f3e20] [cursor=pointer]:
            - /url: "#"
        - listitem
  - generic [ref=f3e22]:
    - generic [ref=f3e23]:
      - heading "Products" [level=2] [ref=f3e24]
      - table [ref=f3e26]:
        - rowgroup [ref=f3e27]:
          - row [ref=f3e28]:
            - columnheader "Pic" [ref=f3e29]
            - columnheader "Title" [ref=f3e30]
            - columnheader "Price" [ref=f3e31]
            - columnheader "x" [ref=f3e32]
        - rowgroup [ref=f3e33]:
          - row [ref=f3e34]:
            - cell [ref=f3e35]
            - cell "Nokia lumia 1520" [ref=f3e37]
            - cell "820" [ref=f3e38]
            - cell [ref=f3e39]:
              - link "Delete" [ref=f3e40] [cursor=pointer]:
                - /url: "#"
          - row [ref=f3e41]:
            - cell [ref=f3e42]
            - cell "Nokia lumia 1520" [ref=f3e44]
            - cell "820" [ref=f3e45]
            - cell [ref=f3e46]:
              - link "Delete" [ref=f3e47] [cursor=pointer]:
                - /url: "#"
          - row [ref=f3e48]:
            - cell [ref=f3e49]
            - cell "Nokia lumia 1520" [ref=f3e51]
            - cell "820" [ref=f3e52]
            - cell [ref=f3e53]:
              - link "Delete" [ref=f3e54] [cursor=pointer]:
                - /url: "#"
    - generic [ref=f3e55]:
      - heading "Total" [level=2] [ref=f3e56]
      - heading "2460" [level=3] [ref=f3e59]
      - button "Place Order" [ref=f3e60]
  - generic [ref=f3e62]:
    - generic [ref=f3e65]:
      - heading "About Us" [level=4] [ref=f3e66]
      - paragraph [ref=f3e67]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=f3e70]:
      - heading "Get in Touch" [level=4] [ref=f3e71]
      - paragraph [ref=f3e72]: "Address: 2390 El Camino Real"
      - paragraph [ref=f3e73]: "Phone: +440 123456"
      - paragraph [ref=f3e74]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=f3e78]
  - contentinfo [ref=f3e80]:
    - paragraph [ref=f3e81]: Copyright © Product Store
```

# Test source

```ts
  1  | export class CartPage {
  2  |     constructor(page){
  3  |         this.page = page;
  4  |         this.cartLink = page.getByRole('link', { name: 'Cart', exact: true });
  5  |         this.productInCart = page.locator('tr.success').locator('td').nth(0)
  6  |         this.placeOrderButton = page.getByRole('button', { name: 'Place Order' })
  7  |     
  8  |     }
  9  | 
  10 |     async gotoCartPage(){
  11 |         await this.cartLink.click();
  12 |     }
  13 | 
  14 |     async getProductNameInCart(){
  15 |         const cartProName=  await this.productInCart.textContent();
> 16 |         await expect(this.productInCart).toHaveText('Nokia lumia 1520');
     |         ^ ReferenceError: expect is not defined
  17 |         console.log('Product in cart is : ' + cartProName);
  18 |     }
  19 | 
  20 |     async clickPlaceOrderButton(){
  21 |         await this.placeOrderButton.click();
  22 |     }
  23 | 
  24 | 
  25 | 
  26 | }
```