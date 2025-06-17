export class FlipKartHome{
    constructor(page){
        this.page=page;
        this.fashion=page.getByText("Fashion", {exact: true})
        //this.fashion=page.locator("//span[text()='Fashion']")
        this.sProduct=page.locator("//div[@class='_31z7R_']//a[2]")
        this.ratingCheckBox=page.locator("//div[text()='4★ & above']")
        //this.sTshirt=page.getByTestId("TSHH3FVCNVVYERFG",{exact:true})
        this.sTshirt=page.locator("//a[text()='Men Solid Round Neck Polyester Light Green T-Shirt']")
        
 
}   
async Home(){
        await this.fashion.hover();
        await this.sProduct.click();
        await this.ratingCheckBox.click()
       
    }
    async w1(){
        await this.sTshirt.click();
    }

}