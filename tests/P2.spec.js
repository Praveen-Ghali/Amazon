import{test,expect, chromium} from "@playwright/test"
test("open new context",async()=>{
  const browser=await chromium.launch();
  const context=await browser.newContext();
  const page1=await context.newPage();
  const page2=await context.newPage();
  await page1.goto("https://playwright.dev/docs/api/class-browsercontext")
  await page2.goto("https://playwright.dev/docs/api/class-browsercontext")
  await page2.pause();
  
})