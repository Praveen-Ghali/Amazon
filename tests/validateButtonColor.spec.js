import{test,expect} from "@playwright/test"
test("validate search flight button background color in spicejet.com",async({page})=>{
    await page.goto("https://www.spicejet.com/")
    //Select button
    const sButton=page.locator("//div[@class='css-1dbjc4n r-1awozwy r-z2wwpe r-1loqt21 r-18u37iz r-1777fci r-d9fdf6 r-1w50u8q r-ah5dr5 r-1otgn73']")
    await sButton.waitFor({state:'attached'})
    //get computed background color
    const bgColor=await sButton.evaluate((el)=>{
        return window.getComputedStyle(el).getPropertyValue('width');
    })
    //validate the color
    expect(bgColor).toContain('162px');
    //expect(bgColor).toContain('rgb(247, 148, 29)');
    //await page.pause()

})



test('validate button background color', async ({ page }) => {
  await page.goto('https://www.spicejet.com/');

  // Locate the button
  const button = page.getByTestId('home-page-flight-cta'); // or any selector like '.my-button'

  // Validate background color (in rgb format)
  await expect(button).toHaveCSS('background-color', 'rgb(252, 182, 62)'); // e.g., green

  // Optional: get actual color and log it
  const bgColor = await button.evaluate(el => getComputedStyle(el).getPropertyValue('background-image'));
  console.log('Background color is:', bgColor);
});
