import {test, expect, chromium, firefox} from "@playwright/test"
import HomePage from "../POM/HomePage.js"
import HomePageData from "../testData/HomePage.json"
import { log } from "console"

    let browser;
    let context;
    let page1;
test('Add to cart',async({})=>{
    browser= await chromium.launch()
    context=await browser.newContext()
    page1=await context.newPage()

    const url=HomePageData.url
    const p1=HomePageData.product
    let Home=new HomePage(page)

    await Home.url(url,p1)
    const pagePromise=context.waitForEvent("page")
    await Home.clickProduct()
    const newPage=await pagePromise
    await page.pause()

})
test('add iphone-15 product to the amazon cart',async({})=>{
    browser=await chromium.launch();
    context=await browser.newContext();
    page1=await context.newPage()
    //launch browser
    await page1.goto("https://www.amazon.in/");
    await expect(page1).toHaveURL("https://www.amazon.in/")
    await expect(page1).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in")
    await page1.getByPlaceholder("Search Amazon.in").fill("iphone-15")
    await page1.keyboard.press("Enter")
    await expect(page1).toHaveTitle("Amazon.in : iphone-15")
   
    const pagePromise = context.waitForEvent('page');
    await page1.waitForSelector("(//h2[@class='a-size-medium a-spacing-none a-color-base a-text-normal'])[1]")
    await page1.locator("(//h2[@class='a-size-medium a-spacing-none a-color-base a-text-normal'])[1]").click()
    const newPage = await pagePromise;
    await newPage.locator("//div[@class='a-section a-spacing-none a-padding-none']//input[@id='add-to-cart-button']").click()
    await newPage.locator("//div[@id='nav-cart-count-container']").click()
    await expect(newPage.locator("//span[@class='a-truncate-cut'][normalize-space()='Apple iPhone 15 (128 GB) - Black']")).toBeVisible()
    await newPage.locator("//span[@class='a-size-small sc-action-delete']").click()
    await expect(newPage.locator("//span[@id='sc-list-item-removed-msg-text-delete-fc1c2ee2-5f15-41cf-a209-0df8e7e84450']")).toBeVisible()
    await newPage.pause()
  
})

test('add to product in flifcart cart',async({})=>{
    browser=await chromium.launch();
    context=await browser.newContext();
    page1=await context.newPage();
    await page1.goto("https://www.flipkart.com/")
    await expect(page1).toHaveURL("https://www.flipkart.com/")
    await expect(page1.getByPlaceholder("Search for Products, Brands and More")).toBeVisible()
    await expect(page1.getByPlaceholder("Search for Products, Brands and More")).toBeEnabled()
    await expect(page1.getByPlaceholder("Search for Products, Brands and More")).toBeEmpty()
    await page1.getByPlaceholder("Search for Products, Brands and More").fill("mobiles")
    await page1.keyboard.press("Enter")
    await page1.waitForSelector("//div[@class='KzDlHZ' and contains(text(),'CMF by Nothing')]")
    const product=page1.locator("//div[@class='KzDlHZ' and contains(text(),'CMF by Nothing')]")
    //Open new page
    const pagePromise=context.waitForEvent('page')
    product.click()
    const newPage=await pagePromise
    //click on the first product
    await newPage.getByRole('button',{name:'Add to cart'}).click()
    //validate product added to the cart
    await expect(newPage.locator("//div[@class='gE4Hlh']")).toBeVisible()
    //Remove the product from the cart
    await newPage.locator("//div[text()='Remove']").click()
    await newPage.locator("//div[@class='sBxzFz fF30ZI A0MXnh']").click()
    //validate product removed successfully
    await expect(newPage.locator("//div[@class='kPozUL']")).toBeVisible()
    await newPage.goBack()
    //Bring Home page front 
    for(const p of context.pages()){
        let titleUrl=page1.url()
        if(titleUrl.includes("https://www.flipkart.com/")){
            p.bringToFront();
            break;
        }
        console.log(p)

    }
    await page1.goBack()
    await page1.getByPlaceholder("Search for Products, Brands and More").fill("iphone")
    await page1.keyboard.press("Enter")
    //await page1.pause()

})