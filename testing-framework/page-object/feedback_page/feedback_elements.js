const webdriver = require('selenium-webdriver');
const { elementNames: eNames, attributes: attr } = require('./feedback_constants');
const basePage = require('../../components/base-page-helper');
const By = webdriver.By;

class feedback_elements extends basePage {
    get elements() {
        return {
            get nameTextBox() {
                return driver.findElement(By.id(attr.id.name));
            },
            get emailTextBox() {
                return driver.findElement(By.id(attr.id.email));
            },
            get subjectTextBox() {
                return driver.findElement(By.id(attr.id.subject));
            },
            get msgTextArea() {
                return driver.findElement(By.id(attr.id.comment));
            },
            get sendButton() {
                return driver.findElement(By.className(attr.class.sendBnt));
            }
            
        }
    }
}

module.exports = new feedback_elements();
