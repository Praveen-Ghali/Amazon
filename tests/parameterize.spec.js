import{test,expect} from "@playwright/test"
//Parameterization of test(Also called data driven testing)
const loginData=[{username:"aman1@gmail.com",password:"aman1@123"},
                 {username:"aman2@gmail.com",password:"aman2@123"}
];
loginData.forEach(({username,password})=>{
    test(`login with multiple doctor ${username}`,async({page})=>{
        await page.goto("http://106.51.82.61:9007/")
        await page.getByPlaceholder('Email').fill(username);
        await page.getByPlaceholder('Password').fill(password);
        await page.locator("//button[@type='submit']").click()
        console.log(`${username} login to the application`)
        await page.waitForTimeout(4000)
    })
})