import { Page, expect } from '@playwright/test'
import { DeliverySpeedEnum }  from '../../helper/deliverySpeedEnum'
export default class DeliverySpeed{
    page:Page
    continueButton = "#buttonLabel-delivery-continue-button"
    
    constructor(_page:Page){
        this.page = _page
    }
    async assertPage(){
        await expect(await this.page.getByText('Pickup Location')).toBeVisible()
        await expect(await this.page.getByText('Laundry Care')).toBeVisible()
        await expect(await this.page.locator('#select-element-wrapper')).toBeVisible()
    }

    async select(option:DeliverySpeedEnum){
        if(option===DeliverySpeedEnum.Standard)
            return this.page.getByText('Standard Delivery').click()
        return this.page.getByText('Express Delivery').click()
    }
    
    async continue():Promise<void>{
        await this.page.click(this.continueButton)    
    }
}