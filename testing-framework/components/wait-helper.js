const CommonConstants = require('../page-object/common-page/common-page.constant');

class WaitHelper {
    async waitElementDisplayed(element) {
        return driver.wait(function() {
            return element.isDisplayed();
        }, CommonConstants.commonData.defaultTimeout);
    }

    async wait(ms) {
        await driver.sleep(ms);
    }

    async implicitWait(ms) {
        await driver.manage().setTimeouts({ implicit: ms })
    }

    async waitForPageToLoad() {
        while (true) {
            const result = driver.executeScript('return document.readyState == \'complete\'');
            if (result) {
                return;
            }
        }
    }
}
module.exports = new WaitHelper();