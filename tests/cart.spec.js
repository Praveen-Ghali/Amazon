import {test,expect} from "@playwright/test"
test('add to cart',async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator("//input[@id='twotabsearchtextbox']").fill("iphone 15")
    await page.keyboard.press("Enter")
    await page.waitForSelector("//h2[@class='a-size-medium a-spacing-none a-color-base a-text-normal']/ancestor::div[@class='puisg-col-inner']/descendant::span[@class='a-size-small puis-normal-weight-text s-underline-text']")
    let ratings=await page.locator("//h2[@class='a-size-medium a-spacing-none a-color-base a-text-normal']/ancestor::div[@class='puisg-col-inner']/descendant::span[@class='a-size-small puis-normal-weight-text s-underline-text']").all()
    console.log(ratings.length);
    
    for(let r of ratings){
        console.log(await r.textContent())
    }

})