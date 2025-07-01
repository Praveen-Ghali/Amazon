import{test,expect, chromium} from "@playwright/test"
test.describe('navigation',()=>{
    let browser;
    let context;
    let page;
    test.beforeEach('open the browser and enter the url',async({})=>{
        browser=await chromium.launch();
        context=await browser.newContext();
        page=await context.newPage();
    await page.goto("http://localhost/login.do");
    await page.getByPlaceholder("Username", {exact:true}).fill('admin');
    await page.getByPlaceholder("Password",{exact:true}).fill('manager');
    await page.locator('#loginButton').click();
    await context.storageState({ path: 'auth.json' });
})
test('login to the application',async()=>{
    await page.locator("//div[text()='USERS']").click();

    
})
// test('home page',async({page})=>{
//     await expect(page).toHaveURL('http://localhost/login.do')
//     //console.log("home page displayed");
    
// });
});

// import { test, expect } from '@playwright/test';

// test.describe('navigation', () => {
//   test.beforeEach(async ({ page }) => {
//     // Go to the starting url before each test.
//     await page.goto('https://playwright.dev/');
//   });

//   test('main navigation', async ({ page }) => {
//     // Assertions use the expect API.
//     await expect(page).toHaveURL('https://playwright.dev/');
//   });
// });