import {expect} from '@playwright/test';
import { test} from '../fixtures/fixture.js';
import inputData from '../utils/inputData.json';

test.describe('signUp',()=>{
const uniqueUsername = `${inputData.username}_${Date.now()}`;
     test.use({ credentials: { username: uniqueUsername, password: inputData.password}})

    test('Test 1: Verify Sign up with valid credentials', async ({ signup }) => {
        const dialogMessage = await signup.clickSignUpButton();
        expect(dialogMessage).toBe('Sign up successful.');  
});
})


test.describe('signUp with close',()=>{
     test.use({credentials: {username: inputData.username, password: inputData.password}})

    test('Test 2: Verify Sign up with Close button', async ({signup }) => {
        await expect(signup.getSignUpModalTitle()).toBeVisible();
        await signup.clickCloseButton();
        await expect(signup.getSignUpModalTitle()).toBeHidden();
    });

})