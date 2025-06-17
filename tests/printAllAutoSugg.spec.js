import{test,expect} from "@playwright/test"
test('print autoSugg',async({page})=>{
    await page.goto("https://www.amazon.in/")
    await expect(page).toHaveURL("https://www.amazon.in/")
    await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in")
    //validate textbox enabled
    await expect(page.getByPlaceholder("Search Amazon.in")).toBeEnabled()
    await expect(page.getByPlaceholder("Search Amazon.in")).toBeVisible()
    await expect(page.getByPlaceholder("Search Amazon.in")).toBeEmpty()
    await page.getByPlaceholder("Search Amazon.in").fill("iphone 16")
    //await page.keyboard.press("Enter")
   await page.waitForSelector("//div[contains(text(),'iphone 16')]")
    let all=await page.locator("//div[contains(text(),'iphone 16')]").all()
    console.log(all.length);
    for(let a of all){
        let text=await a.innerText()
       console.log(text);
       
    }


})

test('myntra autosugg',async({page})=>{
    await page.goto("https://www.flipkart.com/")
    await page.getByPlaceholder('Search for Products, Brands and More').fill('iphone 16')
    await page.waitForSelector("//div[contains(text(),' 5g')]")
    let autoSugg=await page.locator("//div[contains(text(),' 5g')]").all()
    for(let s of autoSugg){
        let text=await s.innerText()
        console.log(text);
        
    }
    
})