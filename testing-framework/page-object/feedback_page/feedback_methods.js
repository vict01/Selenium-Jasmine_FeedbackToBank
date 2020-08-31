const {elements} = require('./feedback_elements');
const BasePage = require('../../components/base-page-helper');
const WaitHelper = require('../../components/wait-helper');
const Logger = require('../../components/logger-helper');
const ExpectationHelper = require('../../components/expectation-helper');
const {testData: data} = require('../feedback_page/feedback_constants');

class feedback_methods extends BasePage {

    async typeName (varName) {
        Logger.subStep(`Insert ${varName} in "Name" field`);
        await this.sendText(elements.nameTextBox, varName);
        return varName;
    } 

    async typeEmail (varEmail) {
        Logger.subStep(`Insert ${varEmail} in "Email" field`);
        await this.sendText(elements.emailTextBox, varEmail);
        return varEmail;
    } 

    async typeSubject (varSubject) {
        Logger.subStep(`Insert ${varSubject} in "Subject" field`);
        await this.sendText(elements.subjectTextBox, varSubject);
        return varSubject;
    } 

    async typeTextMessage (varMsg) {
        Logger.subStep(`Insert ${varMsg} in "text area" field`);
        await this.sendText(elements.msgTextArea, varMsg);
        return varMsg;
    } 

    async clickOnSendMessage() {
        Logger.subStep('Click on Send Message button');
        await this.click(elements.sendButton);
    }

 //Verification Methods Section:
    async verifyTextInNameField(text) {
        Logger.subVerification(`${text} should be contained in Name field`);
        await ExpectationHelper.verifyElementContainsValue(elements.nameTextBox, text);
    }

    async verifyTextInEmailField(text) {
        Logger.subVerification(`${text} should be contained in Email field`);
        await ExpectationHelper.verifyElementContainsValue(elements.emailTextBox, text);
    }

    async verifyTextInSubjectField(text) {
        Logger.subVerification(`${text} should be contained in Subject field`);
        await ExpectationHelper.verifyElementContainsValue(elements.subjectTextBox, text);
    }

    async verifyTextMessageArea(text) {
        Logger.subVerification(`${text} should be contained in text area field`);
        await ExpectationHelper.verifyElementContainsValue(elements.msgTextArea, text);
    }

    async verifySuccessfulMessageSent(text) {
        Logger.verification(`We should be taken to page: ${text}`);
        await WaitHelper.waitForPageToLoad();
        await ExpectationHelper.verifyTextContainedInUrl(text);
    }

    async verifyIfAnyFieldIsFull(element) {
        Logger.verification(`the field is appropriately full`);
        await WaitHelper.waitElementDisplayed(element);
        const alert = await element.getAttribute('validationMessage');
        await ExpectationHelper.verifyStringAreEquals(alert, data.noAlertEmptyField);
    }

    async verifyIfAnyFieldIsEmpty(element) {
        Logger.verification(`Error Messsage because of empty field`);
        await WaitHelper.waitElementDisplayed(element);
        const alert = await element.getAttribute('validationMessage');
        await ExpectationHelper.verifyStringAreEquals(alert, data.alertEmptyField);
    }

}

module.exports = new feedback_methods();