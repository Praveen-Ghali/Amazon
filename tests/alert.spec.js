import{test,expect} from "@playwright/test"
test('handle alert popup',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
   
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept()
    })
     await page.click("(//button[normalize-space()='Simple Alert'])[1]")
   await page.waitForTimeout(5000)
})