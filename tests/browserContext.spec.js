import {test,expect, chromium} from "@playwright/test"
test('handling multiple pages',async({})=>{
    const browser=await chromium.launch();
    const context=await browser.newContext();
    const page1=await context.newPage();
    const page2=await context.newPage()
    await page1.goto("https://playwright.dev/docs/intro")
    await page2.goto("https://playwright.dev/docs/intro")
})