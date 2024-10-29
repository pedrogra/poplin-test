import { Page } from '@playwright/test'
import config from '../../config.json'
import notification from './notification'
export default class Auth{
    constructor(_page:Page){
        this.page = _page
    }
    page:Page
    emailButtonXpath = "//span[text()='Continue with Email']"
    emailInputSelector = "#email"
    continueButton = "#buttonLabel-email-login-button"
    passwordInputSelect = "#enter-password"
    loginbutton = "#buttonLabel-enter-password-login-button"

    async login(page: Page):Promise<void>{
        await page.goto(config.env.dev.url);
        await page.click(this.emailButtonXpath)
        await page.fill(this.emailInputSelector,config.env.dev.login)
        await page.click(this.continueButton)
        await page.fill(this.passwordInputSelect,config.env.dev.password)
        await page.click(this.loginbutton)
        await page.click(notification.next)
    }
}