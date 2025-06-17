import {test,expect} from "@playwright/test"
test('goto multiple page',async({page})=>{
    //trigger the url
    await page.goto("https://www.amazon.in/")
    await expect(page).toHaveURL("https://www.amazon.in/")
    await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in")
    //pass the value to the search engine
    await expect(page.getByPlaceholder("Search Amazon.in")).toBeVisible()
    await expect(page.getByPlaceholder("Search Amazon.in")).toBeEmpty()
    await expect(page.getByPlaceholder("Search Amazon.in")).toBeEnabled()
    await page.getByPlaceholder("earch Amazon.in").fill("mobiles")
    await page.keyboard.press('Enter')
    //go to last page and click on second page
    await page.click("//span[@class='s-pagination-strip']//li[2]")
    //await page.waitForTimeout(4000)

})