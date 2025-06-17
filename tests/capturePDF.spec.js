import {test,expect, chromium} from "@playwright/test"
test('capture pdf',async({})=>{
    const browser=await chromium.launch({headless:false});
    const context=await browser.newContext();
    const page1=await context.newPage();
    await page1.goto("https://playwright.dev/docs/intro")
    await page1.pdf({
    path: './Mypage3.pdf',         // Output file name
    format: 'A4',             // Paper format (A4, Letter, etc.)
    printBackground: true     // Include background graphics
  });

  //await browser.close();
})