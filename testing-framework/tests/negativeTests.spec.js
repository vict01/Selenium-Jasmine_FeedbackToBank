const homePageMethod = require('../page-object/home-page/home-page.helper');
const commonMethod = require('../page-object/common-page/common-page.helper');
const feedbackMethod = require('../page-object/feedback_page/feedback_methods');
const Logger = require('../components/logger-helper');
const suites = require('../components/test-suites');
const { testData: data } = require('../page-object/feedback_page/feedback_constants');
const { elements } = require('../page-object/feedback_page/feedback_elements');
const PageHelper = require('../components/page-helper');

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

describe(suites.suiteNames.negativeTestCase, () => {
    beforeAll(async () => {
        await commonMethod.navigateToApplication();
    });

    afterAll(async () => {
        await PageHelper.closeBrowser();
    });

    it('Send message without indicating any message', async () => {
        Logger.testCaseId('002');

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
        Logger.step('Click on Send Message Button');
        await feedbackMethod.clickOnSendMessage();

        Logger.stepNumber(6);
        Logger.step('Last step: Veifying if the message field was left empty');
        await feedbackMethod.verifyIfAnyFieldIsEmpty(elements.msgTextArea);

    });
});
