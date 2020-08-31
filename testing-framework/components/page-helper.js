const BasePage = require('../components/base-page-helper');
const WaitHelper = require('../components/wait-helper');
const CommonConstant = require('../page-object/common-page/common-page.constant');

class PageHelper {

    async closeBrowser() {
        try {
            await driver.quit();
            driver = null;
        } catch (e) {
            console.log('Browser already closed');
        }
    }

    async restartBrowser() {
        try {
            await this.closeBrowser();
        } catch (e) {
            console.log('Browser already closed');
        }
        new BasePage();
    }

    async newBrowser() { 
     return new BasePage();  
    }

    async clearBrowser() {
        await driver.manage().deleteAllCookies();
        await driver.navigate().refresh();
    }
    
    async getCurrentUrl() {
        let url;
        await WaitHelper.implicitWait(CommonConstant.commonData.implicitWaitDefaultTimeout);
        await driver.getCurrentUrl().then(function (currentUrl) {
            url = currentUrl.toString();
        });
        return url;
    }

}
module.exports = new PageHelper();
