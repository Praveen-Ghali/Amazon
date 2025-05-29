import {test,expect} from "@playwright/test"
test('add product to cart',async({browser})=>{
    const context= await browser.newContext()
    const page1=await context.newPage()
    await page1.goto("https://www.amazon.in/")
    await page1.locator("//input[@id='twotabsearchtextbox']").fill("iphone 15")
    await page1.keyboard.press("Enter")
    //await page1.waitForTimeout(5000)
    //const pagePromise = context.waitForEvent('page');
    await page1.locator("//h2[@class='a-size-medium a-spacing-none a-color-base a-text-normal']").all()
    const allAddtoCart=await page1.locator("//button[@name='submit.addToCart']").all()
    let count=0
    for(let a of allAddtoCart ){
        
        await a.click()
        await page1.locator("(//a[@class='a-button-text'])[1]").click()
        await expect(await page1.locator("//h4[@class='a-text-normal']")).toBeVisible()
        await page1.waitForSelector("//h4[@class='a-text-normal']//span[@class='a-truncate-full a-offscreen']")
        let product=await page1.locator("//h4[@class='a-text-normal']//span[@class='a-truncate-full a-offscreen']").textContent()
        count ++;
        console.log(`${count}-> ${product} added to the cart`)
        await page1.locator("//input[@value='Delete']").click()
        console.log(`${count}-> ${product} deleted from the cart`)
        await page1.goBack()
       
    }
    
    // for(let p of allProducts){
    //     await p.click()
    //     const newPage = await pagePromise;
    //     await newPage.locator("//div[@class='a-section a-spacing-none a-padding-none']//input[@id='add-to-cart-button']").click()
       
    //     // await newPage.close();
    // }
   // await page1.pause()
})