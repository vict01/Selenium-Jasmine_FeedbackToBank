const homePageMethod = require('../page-object/home-page/home-page.helper');
const commonMethod = require('../page-object/common-page/common-page.helper');
const feedbackMethod = require('../page-object/feedback_page/feedback_methods');
const Logger = require('../components/logger-helper');
const suites = require('../components/test-suites');
const { testData: data } = require('../page-object/feedback_page/feedback_constants');

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

describe(suites.suiteNames.happyPath, () => {
    beforeAll(async () => {
        await commonMethod.navigateToApplication();
    });

    it('Send message indicating all valid fields', async () => {
        Logger.testCaseId('001');

        Logger.stepNumber(1);
        Logger.step('Click on Feedback Link');
        await homePageMethod.clickOnFeedBakLink();

        Logger.stepNumber(2);
        Logger.step('Typing name');
        const name = await feedbackMethod.typeName(data.nameData);
        Logger.verification('The inserted name should be contained in name field');
        await feedbackMethod.verifyTextInNameField(name);

        Logger.stepNumber(3);
        Logger.step('Typing E-mail');
        const email = await feedbackMethod.typeEmail(data.emailData);
        Logger.verification('The inserted E-mail should be contained in E-mail field');
        await feedbackMethod.verifyTextInEmailField(email);

        Logger.stepNumber(4);
        Logger.step('Typing Subject');
        const subject = await feedbackMethod.typeSubject(data.subjectData);
        Logger.verification('The inserted subject should be contained in Subject field');
        await feedbackMethod.verifyTextInSubjectField(subject);

        Logger.stepNumber(5);
        Logger.step('Typing message to be reporte');
        const message = await feedbackMethod.typeTextMessage(data.msgData);
        Logger.verification('The inserted message should be contained in Message area');
        await feedbackMethod.verifyTextMessageArea(message);

        Logger.stepNumber(6);
        Logger.step('Click on Send Message Button');
        await feedbackMethod.clickOnSendMessage();

        Logger.stepNumber(7);
        Logger.step('Last step: Veifying if the message was sent successfully');
        await feedbackMethod.verifySuccessfulMessageSent(data.urlSuccessfulSend);

    });
});
