export class Tshirt{
    constructor(page){
        this.page=page;
        this.addToCart=page.locator("//*[name()='svg' and @class='NwyjNT']")
        this.removeBtn=page.locator("//div[text()='Remove']")
    }
     async Acart(){
        await this.addToCart.click()
    }
}