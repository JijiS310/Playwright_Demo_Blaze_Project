/*
https://www.demoblaze.com/
 1. Sign Up -> Enter Data -> Click Sign Up 
 2. Sign Up -> Enter Data -> Click Close 
 3. Verify login with valid credentials 
 4. Verify login with invalid username and valid password 
 5. Verify login with valid username and invalid password 
 6. Verify login with invalid username and invalid password 
 7. Login with valid credentials -> Select a product -> Add to Cart -> Click "ok" on the popup 
 8. Login with valid credentials -> Select a product under Phones-> Add to Cart -> Click "ok" on the popup -> Add details -> Purchase
 9.  Login with valid credentials -> Select a product under Monitors-> Add to Cart -> Click "ok" on the popup -> Add details -> Purchase 
 10. Login with valid credentials -> Logout 
*/

import { test, expect } from '@playwright/test';

test('Click Sign up', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  const signupLink =  page.getByRole('link', { name: 'Sign up' })
  await signupLink.click();
  const usernameInput = page.locator('#sign-username');
  await usernameInput.fill('JijiRej');
  const passwordInput = page.locator('#sign-password');
  await passwordInput.fill('Test@123');
  const signUpBtn = page.getByRole('button', { name: 'Sign up' });
  const dialogPromise = page.waitForEvent('dialog');
  await signUpBtn.click();
  const dialog = await dialogPromise;
  console.log(`Dialog message: ${dialog.message()}`);
  expect(dialog.message()).toBe('Sign up successful.');
  await dialog.accept();
})

test('Click Close', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  const signUp =  page.getByRole('link', { name: 'Sign up' })
  await signUp.click();
  const usernameInput = page.locator('#sign-username');
  await usernameInput.fill('JijiRej');
  const passwordInput = page.locator('#sign-password');
  await passwordInput.fill('Test@123');
  const closeBtn = page.locator('button.btn.btn-secondary:visible');
  await closeBtn.click();
})

test('Login with valid credentials', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  const login = page.locator('#login2')
  await login.click();
  const loginUsername = page.locator('#loginusername');
  await loginUsername.click();
  await loginUsername.fill('JijiRej');
  const loginPassword = page.locator('#loginpassword');
  await loginPassword.click();
  await loginPassword.fill('Test@123');
  const loginBtn = page.getByRole('button', { name: 'Log in' });
  await loginBtn.click();
  const welcomeUser = page.locator('#nameofuser');
  await expect(welcomeUser).toHaveText('Welcome JijiRej');
})

test('Login with invalid username', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  const login = page.locator('#login2')
  await login.click();
  const loginUsername = page.locator('#loginusername');
  await loginUsername.click();
  await loginUsername.fill('JIJI1111');
  const loginPassword = page.locator('#loginpassword');
  await loginPassword.click();
  await loginPassword.fill('Test@123');
  const loginBtn = page.getByRole('button', { name: 'Log in' });
  const dialogPromise = page.waitForEvent('dialog');
  await loginBtn.click();
  const dialog = await dialogPromise;
  console.log(`Dialog message: ${dialog.message()}`);
  expect(dialog.message()).toBe('User does not exist.');
  await dialog.accept();
})

test('Login with invalid password', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  const login = page.locator('#login2')
  await login.click();
  const loginUsername = page.locator('#loginusername');
  await loginUsername.click();  
  const loginPassword = page.locator('#loginpassword');
  await loginPassword.click();
  await loginUsername.fill('JijiRej');
  await loginPassword.fill('JIJI@123');
  const loginBtn = page.getByRole('button', { name: 'Log in' });
  const dialogPromise = page.waitForEvent('dialog');
  await loginBtn.click();
  const dialog = await dialogPromise;
  console.log(`Dialog message: ${dialog.message()}`);
  expect(dialog.message()).toBe('Wrong password.');
  await dialog.accept();
})

test('Login with invalid Username and Password', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  const login = page.locator('#login2')
  await login.click();
  const loginUsername = page.locator('#loginusername');
  await loginUsername.click();  
  const loginPassword = page.locator('#loginpassword');
  await loginPassword.click();
  await loginUsername.fill('JijI111');
  await loginPassword.fill('JIJI@123');
  const loginBtn = page.getByRole('button', { name: 'Log in' });
  const dialogPromise = page.waitForEvent('dialog');
  await loginBtn.click();
  const dialog = await dialogPromise;
  console.log(`Dialog message: ${dialog.message()}`);
  expect(dialog.message()).toBe('User does not exist.');
  await dialog.accept();
})