import { Page } from '@playwright/test'
export default class Laundry{
    page:Page
    newOrderButton = "#buttonLabel-new-order-button"
    startNewOrder = "#"
    
    constructor(_page:Page){
        this.page = _page
    }
    
    async newOrder():Promise<void>{
        await this.page.click(this.newOrderButton)
        const start = await this.page.getByText('Start new order')
        start.click()
        try{this.page.on('dialog', dialog => dialog.dismiss())}catch(e){}
    }
}