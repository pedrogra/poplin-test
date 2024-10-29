import { Page} from '@playwright/test'
export default class Preferred{
    page:Page
    continueButton = "#buttonLabel-preferred-continue-button"
    enableFlexibleDelivery = "#checkbox-checkbox-element"
    constructor(_page:Page){
        this.page = _page
    }

    async isFlexibleDelivery(status:boolean){
        if(status)
            return await this.page.check(this.enableFlexibleDelivery)
        return await this.page.uncheck(this.enableFlexibleDelivery)
    }
    
    async continue():Promise<void>{
        await this.page.click(this.continueButton)    
    }
}