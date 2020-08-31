const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'info'

class Logger {
    testCaseId(id) {
        logger.info(`Test case => ${id}`);
    }

    stepNumber(stepNumber) {
        logger.info(`Step # ${stepNumber}`);
    }

    step(stepDescription) {
        logger.info(`Step => ${stepDescription}`);
    }

    verification(stepDescription) {
        logger.info(`Verification => ${stepDescription}`);
    }

    subStep(stepDescription) {
        logger.info(`Sub step => ${stepDescription}`);
    }

    subVerification(stepDescription) {
        logger.info(`Sub verification  => ${stepDescription}`);
    }

    preCondition(stepDescription) {
        logger.info(`Pre-condition => ${stepDescription}`);
    }

    postCondition(stepDescription) {
        logger.info(`Post-Condition => ${stepDescription}`);
    }

}
module.exports = new Logger();