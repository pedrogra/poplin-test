import { Locator, Page, expect } from '@playwright/test'
import { BagEnum }  from '../../helper/bagEnum'
export default class DeliverySpeed{
    page:Page
    continueButton = "#buttonLabel-bag-continue-button"
    subtractBag = "//div[@id='stepper-{0}']/div[@class='stepper-field']/*[@id='button-element-wrapper'][1]"
    addBag = "//div[@id='stepper-{0}']/div[@class='stepper-field']/*[@id='button-element-wrapper'][2]"
    
    constructor(_page:Page){
        this.page = _page
    }
    async assertPage(){
        await expect(await this.page.getByText('Pickup Location')).toBeVisible()
        await expect(await this.page.getByText('Laundry Care')).toBeVisible()
        await expect(await this.page.locator('#select-element-wrapper')).toBeVisible()
    }

    async select(option:BagEnum, total:number){
        switch(option){
            case BagEnum.Small:{
                const ele = await this.page.locator(this.addBag.replace("{0}","small"))
                this.addBags(ele,total)
                break;
            }
            case BagEnum.Regular:{
                const ele = await this.page.locator(this.addBag.replace("{0}","regular"))
                this.addBags(ele,total)
                break;
            }
            case BagEnum.Large:{
                const ele = await this.page.locator(this.addBag.replace("{0}","large"))
                this.addBags(ele,total)
                break;
            }
            default:{
                throw new Error(`{option} not valid.`)
            }
        }
    }

    async addBags(ele:Locator, total:number){
        for(var i=0; i<total; i++){
            ele.click();
        }
    }
    
    async continue():Promise<void>{
        await this.page.click(this.continueButton)    
    }
}