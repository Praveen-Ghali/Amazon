import{test,expect, chromium} from "@playwright/test"
test('SBI login page',async({})=>{
    const broswser=await chromium.launch();
    const context=await broswser.newContext();
    const page=await context.newPage();

    //open the browser and trigger the sbi url
    await page.goto("https://retail.onlinesbi.sbi/retail/login.htm")
    //validate w.r.t url
    await expect(page).toHaveURL("https://retail.onlinesbi.sbi/retail/login.htm")
    //validate title of the page
    await expect(page).toHaveTitle(" State Bank of India - Personal Banking")
    //click on the Home page tab
    await page.click("//a[text()='Home']")
    //validate home page with its title
    await expect(page).toHaveTitle("State Bank of India")
    //validate home page with its url
    await expect(page).toHaveURL("https://retail.onlinesbi.sbi/")
    //click banking forms link
    const pagePromise=context.waitForEvent('page')
    await page.click("//div[@class='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-4 lessGroup']//a[text()='Banking Forms']")
    const newPage1=await pagePromise;
    //validate with title of banking form
    await expect(newPage1).toHaveTitle(" State Bank of India - Personal Banking")
    //validate url of the banking form
    await expect(newPage1).toHaveURL("https://retail.onlinesbi.sbi/npersonal/reg_forms.html")
    //open new window2
    const pagePromise1=context.waitForEvent('page')
    //click on click here link
    await newPage1.click("//span[text()='click here']");
    const newPage2=await pagePromise1
    //hover on Accounts tab
    await newPage2.hover("//ul[@class='dropdown-menu intro dis_table']//a[@class='align-items-center dropdown-item dropdown-toggle'][normalize-space()='Accounts']")
    
    const allItem=await newPage2.locator("//a[@class='dropdown-item']").all()
    for(let a of allItem){
        let text=await a.textContent();
        if(text==="NRE Salary Account"){
            await a.click();
            await expect(newPage2.locator("//h1[text()='NRE Salary Account - NRI']")).toBeVisible()
        }
        console.log(text)
    }
    for(const p of context.pages()){
        let title=await p.url();
        if(title.includes("https://retail.onlinesbi.sbi")){
            p.bringToFront();
            break;
        }
    }
    //validate SBI logo in the HomePage
    //await expect(page.locator("//a[@id='logo']")).toBeVisible()
    //await newPage1.pause();
})