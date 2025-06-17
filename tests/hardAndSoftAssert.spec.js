import{test,expect, chromium} from "@playwright/test"
test('SBI login page',async({})=>{
    const broswser=await chromium.launch();
    const context=await broswser.newContext();
    const page=await context.newPage();

    //open the browser and trigger the sbi url
    await page.goto("https://retail.onlinesbi.sbi/retail/login.htm")
    //validate w.r.t url
    await expect(page).toHaveURL("https://retail.onlinesbi.sbi/retail/login.htm")
    //validate title of the page
    await expect(page).toHaveTitle(" State Bank of India - Personal Banking")
})    