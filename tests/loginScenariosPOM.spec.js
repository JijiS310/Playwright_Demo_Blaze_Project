import {expect} from '@playwright/test';
import { test} from '../fixtures/fixture.js';
import inputData from '../utils/inputData.json';


test.describe('login with valid creds',()=>{
    test.use({credentials: { username: inputData.username, password: inputData.password}})

    test('Test 3: Verify Login with Valid Credentials', async ({logInAndOut}) => {
        await expect(logInAndOut.welcomeUser).toHaveText(`Welcome ${inputData.username}`);
        
    });
});



test.describe('Test 4,5,6 : Verify login with invalid credentials',()=>{
   for (const { testName, username, password, message } of inputData.invalidLogins) {
    test.describe(testName, () => {
      test.use({ credentials: { username, password } });

      test('shows error dialog', async ({ login }) => {
        const dialogMessage = await login.clickLoginButtonAndGetDialog();
        expect(dialogMessage).toBe(message);
      });
    });
  }
});



test.describe('logout with valid creds',()=>{
    test.use({credentials: { username: inputData.username, password: inputData.password}})

    test('Test 10: Verify Logout functionality', async ({ login }) => {
        await expect(login.welcomeUser).toHaveText(`Welcome ${inputData.username}`);
        await login.clickLogOutButton();
        await expect(login.loginIcon).toBeVisible();
    });

});

