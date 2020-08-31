const homePageElement = require ('./home-page.elements');
const WaitHelper = require('../../components/wait-helper');
const BasePage = require('../../components/base-page-helper');
const Logger = require('../../components/logger-helper');

class homePageHelper extends BasePage {
    async clickOnFeedBakLink() {
        Logger.subStep('Click on feedBak link');
        await WaitHelper.waitElementDisplayed(homePageElement.elements.feedBak);
        await this.click(homePageElement.elements.feedBak);
    }

}

module.exports = new homePageHelper();