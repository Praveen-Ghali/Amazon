import{test,expect} from "@playwright/test"
test('click on mobile',async({page})=>{
    //trigger url
    await page.goto("https://www.flipkart.com/");
    await page.getByPlaceholder('Search for Products, Brands and More').fill("mobiles");
    await page.keyboard.press('Enter')
    const t=await page.title()
    console.log(t)
    expect(t).toHaveTitle('Mobiles- Buy Products Online at Best Price in India - All Categories | Flipkart.com')


})3