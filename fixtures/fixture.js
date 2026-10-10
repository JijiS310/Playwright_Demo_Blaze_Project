import {test as base} from '@playwright/test';
import { ObjectManager } from '../pages/ObjectManager';


export const test = base.extend ({
    url:[
        async ({page}, use) => {
        await page.goto('/');
        await use();
    },
    { auto: true }
    ],

    pom:[ async ({page}, use) => {
        const pom = new ObjectManager(page);
        await use(pom);
    },
    { auto: true }
    ],

   credentials: 
   {
    username: '',
    password: ''
    },


    login: async ({pom,credentials},use) => {
        const loginPage = pom.getLoginPage(); 
        await loginPage.clickLoginUrl();
        await loginPage.fillLoginForm(credentials.username, credentials.password);
        await loginPage.clickLoginButton();
        await use(loginPage)
    

    },

     logInAndOut: async ({login}, use) => {
        await use(login);
        await login.clickLogOutButton();
        
    },

    signup: async ({pom,credentials},use) =>{
        const signupPage = pom.getSignupPage();
        await signupPage.clickSignUpLink();
        await signupPage.fillSignUpForm(credentials.username, credentials.password);
        await use(signupPage);
    }

});

