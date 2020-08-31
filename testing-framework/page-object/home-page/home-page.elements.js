const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const {attributes: attr} = require ('./home-page.constant');

class CommonPage{
    get elements() {
        return {
            get feedBak() {
                return driver.findElement(By.id(attr.id.feedBack));
            }         
     
        }
    }
}

module.exports = new CommonPage();