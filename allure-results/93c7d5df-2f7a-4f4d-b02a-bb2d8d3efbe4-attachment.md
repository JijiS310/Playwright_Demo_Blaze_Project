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
- generic [ref=f3e1]:
  - dialog [active] [ref=f3e2]:
    - document [ref=f3e3]:
      - generic [ref=f3e4]:
        - generic [ref=f3e5]:
          - heading "Place order" [level=5] [ref=f3e6]
          - button "Close" [ref=f3e7] [cursor=pointer]: ×
        - generic [ref=f3e9]:
          - generic [ref=f3e10]: "Total: 1640"
          - generic [ref=f3e11]:
            - generic [ref=f3e12]: "Name:"
            - 'textbox "Total: 1640 Name:" [ref=f3e13]': Jiji Sasidharan
          - generic [ref=f3e14]:
            - generic [ref=f3e15]: "Country:"
            - textbox "Country:" [ref=f3e16]: India
          - generic [ref=f3e17]:
            - generic [ref=f3e18]: "City:"
            - textbox "City:" [ref=f3e19]: Thrissur
          - generic [ref=f3e20]:
            - generic [ref=f3e21]: "Credit card:"
            - textbox "Credit card:" [ref=f3e22]: "1234567890123456"
          - generic [ref=f3e23]:
            - generic [ref=f3e24]: "Month:"
            - textbox "Month:" [ref=f3e25]: "12"
          - generic [ref=f3e26]:
            - generic [ref=f3e27]: "Year:"
            - textbox "Year:" [ref=f3e28]: "2029"
        - generic [ref=f3e30]:
          - button "Close" [ref=f3e31]
          - button "Purchase" [ref=f3e32]
  - text:             
  - navigation [ref=f3e33]:
    - generic [ref=f3e34]:
      - link "PRODUCT STORE" [ref=f3e35] [cursor=pointer]:
        - /url: index.html
      - list [ref=f3e38]:
        - listitem [ref=f3e39]:
          - link "Home (current)" [ref=f3e40] [cursor=pointer]:
            - /url: index.html
            - text: Home
            - generic [ref=f3e41]: (current)
        - listitem [ref=f3e42]:
          - link "Contact" [ref=f3e43] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f3e44]:
          - link "About us" [ref=f3e45] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f3e46]:
          - link "Cart" [ref=f3e47] [cursor=pointer]:
            - /url: "#"
        - listitem
        - listitem [ref=f3e48]:
          - link "Log out" [ref=f3e49] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f3e50]:
          - link "Welcome JijiRej" [ref=f3e51] [cursor=pointer]:
            - /url: "#"
        - listitem
  - generic [ref=f3e53]:
    - generic [ref=f3e54]:
      - heading "Products" [level=2] [ref=f3e55]
      - table [ref=f3e57]:
        - rowgroup [ref=f3e58]:
          - row [ref=f3e59]:
            - columnheader "Pic" [ref=f3e60]
            - columnheader "Title" [ref=f3e61]
            - columnheader "Price" [ref=f3e62]
            - columnheader "x" [ref=f3e63]
        - rowgroup [ref=f3e64]:
          - row [ref=f3e65]:
            - cell [ref=f3e66]
            - cell "Nokia lumia 1520" [ref=f3e68]
            - cell "820" [ref=f3e69]
            - cell [ref=f3e70]:
              - link "Delete" [ref=f3e71] [cursor=pointer]:
                - /url: "#"
          - row [ref=f3e72]:
            - cell [ref=f3e73]
            - cell "Nokia lumia 1520" [ref=f3e75]
            - cell "820" [ref=f3e76]
            - cell [ref=f3e77]:
              - link "Delete" [ref=f3e78] [cursor=pointer]:
                - /url: "#"
    - generic [ref=f3e79]:
      - heading "Total" [level=2] [ref=f3e80]
      - heading "1640" [level=3] [ref=f3e83]
      - button "Place Order" [ref=f3e84]
  - generic [ref=f3e86]:
    - generic [ref=f3e89]:
      - heading "About Us" [level=4] [ref=f3e90]
      - paragraph [ref=f3e91]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=f3e94]:
      - heading "Get in Touch" [level=4] [ref=f3e95]
      - paragraph [ref=f3e96]: "Address: 2390 El Camino Real"
      - paragraph [ref=f3e97]: "Phone: +440 123456"
      - paragraph [ref=f3e98]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=f3e102]
  - contentinfo [ref=f3e104]:
    - paragraph [ref=f3e105]: Copyright © Product Store
  - generic [ref=f3e108]:
    - heading "Thank you for your purchase!" [level=2] [ref=f3e114]
    - paragraph [ref=f3e115]: "Id: 7592599Amount: 820 USDCard Number: 1234567890123456Name: Jiji SasidharanDate: 4/9/2026"
    - button "OK" [ref=f3e118]
```

# Test source

```ts
  1  | export class CheckoutPage{
  2  |     constructor(page){
  3  |         this.page = page;
  4  |         this.nameInput = page.locator('#name');
  5  |         this.countryInput = page.locator('#country');
  6  |         this.cityInput = page.locator('#city');
  7  |         this.creditCardInput = page.locator('#card');
  8  |         this.monthInput = page.locator('#month');
  9  |         this.yearInput = page.locator('#year');
  10 |         this.purchaseButton = page.getByRole('button', { name: 'Purchase' }); 
  11 |         this.orderModal = page.locator('div.sweet-alert.showSweetAlert.visible')
  12 |         this.successMessage = this.orderModal.locator('h2');
  13 |         this.orderNumber = this.orderModal.locator('p').nth(0);
  14 |         this.OkButton = this.orderModal.getByRole('button', { name: 'OK' });
  15 |         //this.successMessage = page.getByText('Thank you for your purchase!', { exact: true })
  16 |     
  17 |     }
  18 | 
  19 |     async fillCheckoutForm(name, country, city, creditCard, month, year){
  20 |         await this.nameInput.fill(name);
  21 |         await this.countryInput.fill(country);
  22 |         await this.cityInput.fill(city);
  23 |         await this.creditCardInput.fill(creditCard);
  24 |         await this.monthInput.fill(month);
  25 |         await this.yearInput.fill(year);
  26 |     }
  27 | 
  28 |     async clickPurchaseButton(){
  29 |         await this.purchaseButton.click();
  30 |     }
  31 | 
  32 |     async getPurchaseConfirmation(){
> 33 |         await expect(this.orderModal).toBeVisible();
     |         ^ ReferenceError: expect is not defined
  34 |         const purchaseMessage = await this.successMessage.textContent();
  35 |         console.log('Purchase confirmation message is : ' + purchaseMessage);
  36 |         expect(purchaseMessage).toContain('Thank you for your purchase!');
  37 |         const orderDetails = await this.orderNumber.textContent();
  38 |         console.log('Order details are : ' + orderDetails);
  39 | 
  40 |     }
  41 | 
  42 |     async clickOkButton(){
  43 |         await this.OkButton.click();
  44 |     }
  45 | 
  46 | 
  47 | 
  48 | }
```