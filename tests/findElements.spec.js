import {test, expect} from "@playwright/test"
test('Print all the products',async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator("//input[@id='twotabsearchtextbox']").fill("iphone 15")
    await page.keyboard.press("Enter")
    //await page.waitForEvent()
    const mobiles=await page.locator("//h2[@class='a-size-medium a-spacing-none a-color-base a-text-normal']/span").all()
    for(let m of mobiles){
        let text=m.textContent()
        console.log(text)
    }

})