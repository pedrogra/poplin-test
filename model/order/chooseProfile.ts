import { Page, expect } from '@playwright/test'
export default class ChooseProfile{
    page:Page
    continueButton = "#buttonLabel-choose-profile-continue-button"
    
    constructor(_page:Page){
        this.page = _page
    }
    async assertPage(){
        await expect(await this.page.getByText('Pickup Location')).toBeVisible()
        await expect(await this.page.getByText('Laundry Care')).toBeVisible()
        await expect(await this.page.locator('#select-element-wrapper')).toBeVisible()
    }
    
    async continue():Promise<void>{
        await this.page.click(this.continueButton)    
    }
}