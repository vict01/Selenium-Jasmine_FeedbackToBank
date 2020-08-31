const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const {attributes: attr} = require ('./common-page.constant');

class CommonPage{
    get elements() {
        return {
            get indexPage() {
                return driver.findElement(By.className(attr.class.brand));
            }         
     
        }
    }
}

module.exports = new CommonPage();