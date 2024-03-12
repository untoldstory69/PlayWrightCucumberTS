import {BeforeAll, AfterAll, Before, After, Status, AfterStep} from "@cucumber/cucumber"
import { Browser, BrowserContext, Page, chromium } from "@playwright/test"
import {pageFixture} from "./pageFixture"

let browser: Browser
let page: Page
let context: BrowserContext

BeforeAll(async function () {
    browser = await chromium.launch({headless: false})

})

Before (async function() {
    context = await browser.newContext()
    page = await context.newPage()
    pageFixture.page = page
})
AfterStep(async function ({ pickle, result }){
     //attaching screenshot if the test steps doesn't passed
     if (result?.status != Status.PASSED)
     {
         const image = await pageFixture.page.screenshot({path: `./test-results/screenshot/${pickle.name}.png`, type: "png"})
         await this.attach(image, "image/png") 
     }
})
After(async function (){
    await page.close()
    await context.close()    
})

AfterAll(async function (){
    await browser.close()
})