import{test,expect} from "@playwright/test"
import flipkartData from "../testData/flipkart.json";
import { FlipKartHome } from "../POM/FlipKartHome";
import { Tshirt } from "../POM/Tshirt";

test('Order one plus bluetooth from flipcart',async({browser})=>{
    const context=await browser.newContext();
    const page1=await context.newPage();
    //trigger the url
    let url1=flipkartData.url
    await page1.goto(url1);
    //hover on fashion tab
    let h1=new FlipKartHome(page1);
    await h1.Home();
    const pagePromise=context.waitForEvent('page')
    await h1.w1();
    const page2=await pagePromise;
    let a=new Tshirt(page2)
    await a.Acart()
    await page2.pause();

})