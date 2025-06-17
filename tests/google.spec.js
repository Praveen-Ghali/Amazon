import{test,expect} from "@playwright/test"
test('google.com',async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/shadow?sublist=0")
    await page.getByPlaceholder("Enter your username").fill("pmg@gmail.com")
    debugger;
    //await page.pause()
})