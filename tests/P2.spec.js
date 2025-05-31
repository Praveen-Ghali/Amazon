import{test,expect, chromium} from "@playwright/test"
test("open new context",async()=>{
  const browser=await chromium.launch();
  const context=await browser.newContext();
  const page=await context.newPage();
  await page.goto("https://playwright.dev/docs/api/class-browsercontext")
  await page.pause();
})