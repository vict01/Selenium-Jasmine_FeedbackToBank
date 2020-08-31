const commonElement = require ('./common-page.elements');
const WaitHelper = require('../../components/wait-helper');
const BasePage = require('../../components/base-page-helper');
const Logger = require('../../components/logger-helper');

class CommonPageHelper extends BasePage {
    async clickOnIndexPage() {
        Logger.subStep('Click on Index Page');
        await WaitHelper.waitElementDisplayed(commonElement.elements.indexPage);
        await this.click(commonElement.elements.indexPage);
    }

}

module.exports = new CommonPageHelper();