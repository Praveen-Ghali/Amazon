import {test,expect} from "@playwright/test"
test('print temperature',async({page})=>{
    await page.goto("https://www.google.com")
    await page.locator("(//div[@class='niO4u VDgVie SlP8xc'])[1]").click()
    await page.locator("//textarea[@id='APjFqb']").fill("highest temperature in Newyork")
    await page.keyboard.press("Enter")
    await page.pause()
})