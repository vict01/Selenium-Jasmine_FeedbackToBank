const webdriver = require('selenium-webdriver');
const CommonConstant = require('../page-object/common-page/common-page.constant');
const ExpectationHelper = require('../components/expectation-helper');
const Logger = require('../components/logger-helper');
const WaitHelper = require('../components/wait-helper');
const driver = new webdriver.Builder().forBrowser('chrome').build();

class BasePage {
    constructor() {
        global.driver = driver;
    }

    async navigateToApplication() {
        await driver.get(CommonConstant.commonData.applicationUrl);
        await WaitHelper.waitForPageToLoad();
    }

    async navigateToUrl(url) {    
         await driver.get(url);
    }

    async click(element) {
        await WaitHelper.implicitWait(CommonConstant.commonData.implicitWaitDefaultTimeout);
        await element.click();
    }

    async sendText(element, text) {
        await WaitHelper.waitElementDisplayed(element);
        await element.sendKeys(text);
    }

    async pressKey(key) {
        const element = driver.switchTo().activeElement();
        await element.sendKeys(key);
    }

    async verifyUrl(url) {
        Logger.subVerification(`The current URL should contain ${url}`);
        await ExpectationHelper.verifyTextContainedInUrl(url);
    }

    async getElementValue(element) {
        let elementValue;
        await WaitHelper.waitElementDisplayed(element);
        await element.getAttribute('data-initial-value').then(function (currentValue) {
            elementValue = currentValue;
        });
        return elementValue;
    }

    async sendTextWithoutPassingElement(text) {
        const element = driver.switchTo().activeElement();
        await element.sendKeys(text);
    }
}
module.exports = BasePage;