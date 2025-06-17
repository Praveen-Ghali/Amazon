import{test,expect} from "@playwright/test"
test('mouse hover action',async({page})=>{
    await page.goto("https://www.myntra.com/")
    await page.locator("//a[text()='Men' and @class='desktop-main']").hover()
    await page.pause()
})
test('Double click',async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2")
    await page.locator("//button[text()='Yes']").dblclick()
    await page.pause()
})