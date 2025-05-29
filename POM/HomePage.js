class HomePage{
    constructor(page){
        this.page=page;
        this.searcTbx=page.locator("//input[@id='twotabsearchtextbox']")
        this.allProdocts=page.$$("//h2[@class='a-size-medium a-spacing-none a-color-base a-text-normal']")
    }
    async url(u,p){
        await this.page.goto(u)
        await this.searcTbx.fill(p)
        await this.page.keyboard.press('Enter')
    }
    async clickProduct(){
        for(let p of await this.allProdocts){
            await p.click()
        }
    }
    
}
export default HomePage