import{test,expect} from "@playwright/test"
test('search number flights availability',async({browser})=>{
    const context = await browser.newContext({
    permissions:[]
});
const page = await context.newPage();
    //trigger the url
    await page.goto("https://www.spicejet.com/",{waitUntil:"load"})
    
    const t=await page.title()
    await expect(page).toHaveTitle('SpiceJet - Flight Booking for Domestic and International, Cheap Air Tickets')
    await expect(page).toHaveURL('https://www.spicejet.com/')
    //handle popup
    // page.on('dialog',async dialog=>{
    //     await dialog.accept();
    // })
    //enter from destination
    await page.locator("//div[text()='From']/..//input[@class='css-1cwyjr8 r-homxoj r-ubezar r-10paoce r-13qz1uu']").fill('Bengaluru');
    const value=page.locator("(//div[@class='css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep']//input)[2]")
    await value.fill("Goa (GOI)")
    expect(value).toHaveValue("Goa (GOI)")
    //enter to destination
    await page.waitForSelector("//div[text()='To']/..//input[@class='css-1cwyjr8 r-homxoj r-ubezar r-10paoce r-13qz1uu']");
    
    //select departure date
    await page.getByTestId('departure-date-dropdown-label-test-id').click();
    await page.locator("//div[@class='css-1dbjc4n r-1loqt21 r-u8s1d r-11xbo3g r-1v2oles r-1otgn73 r-16zfatd r-eafdt9 r-1i6wzkk r-lrvibr r-184en5c']").click()
    await page.waitForSelector("//div[@class='css-1dbjc4n r-1loqt21 r-u8s1d r-11xbo3g r-1v2oles r-1otgn73 r-16zfatd r-eafdt9 r-1i6wzkk r-lrvibr r-184en5c']")
    await page.click("//div[text()='August ']/ancestor::div[@data-testid='undefined-month-August-2025']/descendant::div[@data-testid='undefined-calendar-day-20']")
    await page.click("//div[text()='Passengers']/..");
    await page.getByTestId('Adult-testID-plus-one-cta').click();
    await page.getByTestId('home-page-travellers-done-cta').click()
    await page.click("//div[text()='Students']");
    //await page.click("//div[text()='Search Flight']");
    
    await page.click("//div[@class='css-1dbjc4n r-1awozwy r-z2wwpe r-1loqt21 r-18u37iz r-1777fci r-d9fdf6 r-1w50u8q r-ah5dr5 r-1otgn73']")
    //await page.pause()
})