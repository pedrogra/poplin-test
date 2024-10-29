import { Page, expect } from '@playwright/test'
export default class Oversized{
    page:Page
    continueButton = "#buttonLabel-oversized-continue-button"
    
    constructor(_page:Page){
        this.page = _page
    }
    
    async continue():Promise<void>{
        await this.page.click(this.continueButton)    
    }
}