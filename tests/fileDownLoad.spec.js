import {test,expect} from "@playwright/test";
import fs from 'fs';
test('file download',async({page},testInfo)=>{
    expect(testInfo.title).toBe('file download')
    await page.goto("https://commitquality.com/practice-file-download")
    
     // 1. Wait for the download event to be triggered
    const waitForDownlaodEvent=page.waitForEvent('download');
    
    // 2. Click the "Download File" button
    await page.getByRole('button',{name:'Download File'}).click()
    
    // 3. Wait until the download is actually captured
    const download=await waitForDownlaodEvent;
    
    // 4. Save the downloaded file
    // Option 1 (commented): Saves using the original filename from the server
    //await download.saveAs("./"+download.suggestedFilename());
    const filePath="downlaod/dummy-file.txt"
    await download.saveAs(filePath);
    //validate the file downloaded
    // const content=fs.readFileSync(filePath,'utf-8')
    // expect(content).toContain('dummy text file.')
    expect(download.suggestedFilename()).toBe('dummy_file.txt')
    //await page.pause()

})
