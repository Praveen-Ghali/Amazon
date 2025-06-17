import{test,expect} from "@playwright/test"

test('authentication popup',async ({browser}) => {
  //const browser = await chromium.launch();
  const context = await browser.newContext({
    httpCredentials: {
      username: 'admin',
      password: 'admin'
    }
  });
  const page = await context.newPage();
  await page.goto('https://demoapps.qspiders.com/ui/auth?sublist=0');
  await page.pause();
  // Continue with your test
  await page.locator("//a[text()='Login']").click()
  await browser.close();
});

