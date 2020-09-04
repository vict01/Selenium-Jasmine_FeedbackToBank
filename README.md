# Feedback Sending to Zero Bank - Automated Testing
## This is the test automation framework based on Javascript, NodeJS, Jasmine and Selenium-Webdriver used to create tests easily for feedback sending validation.

This framework is made up of the following tools:
```
1. Javascript: The programing language to build the test logic.
2. NodeJS: The Runtime environment that allows packaging and manage the dependencies.
3. Jasmine: The testing framework that provides a BDD and easy-to-read syntax
4. Selenium webdriver: Framework used to automate the actions in the browser and locate elements.
```

## Framework Structure
The relevant framework files are included in the "testing-framework" folder. The framework is based on Page Object model, so that inside the "testing-framework" folder there is a folder corresponding to each of the application pages (class folders) and additionally there is a folder (Components) that includes classes utilities, with specific functions that serve to build automated tests more easily. Finally it includes a folder to store the tests (Tests).
##

### In each folder corresponding to each page or view there are:
* A class of constants: which mainly includes the names, selectors and test data corresponding to that page.
* A class of POs (Page Objects) or Elements: that includes the webEments of that page.
* A class of helpers or methods: that includes the specific methods of that page.

### Within testing-framework/components:
* Base page helper: Includes methods that are common to all classes (pages). All the helper classes, of all the pages of the application extend from this.

* Expectations helper: This class includes the main verifications in a generic way, using this class the specific verifications of each page are created.

* HTML helper: Includes HTML tags and attribute names.

* Logger helper: Includes the logger.

* Page helper: It contains specific methods that manipulate the page or the browser itself.

* test-suites Includes the tests to be executed.

* Wait helper: Includes methods where expected.

### Within testing-framework/page-object/common_page:
* Includes common methods, elements and properties for all pages.

### Within testing-framework/page-object/feedback_page:
* Includes methods, elements and properties of the page to be tested.

### Within testing-framework/page-object/home_page:
* Includes methods, elements and properties of the home page.

### Within testing-framework/tests:
* Includes the names of the different test suites to be executed.
* happyPath.spec.js and negativeTests.spec.js


## Test Scope and explanation:
```
* happyPath.spec.js => Test in which all mandatory fields are filled out and the form is sent successfully. During this process each step is validated.

* negativeTests.spec.js => Test in which we try to send feedback without indicating any message. During this process each step is validated.
```

## Requirements Installation:
1. Unzip the file "AutomationProjectJS.rar" and place it on disk C.
2. Install Node JS.
3. Add: this path: "C:\AutomationProjectJS\testing-framework\web-drivers" in the PATH environment variable.
4. Make sure the chrome browser version which you have installed and download the corresponding chrome driver for it. You can download from here: https://chromedriver.chromium.org/downloads.
Then save this chrome driver into "C:\AutomationProjectJS\testing-framework\web-drivers".
#### Note: For this test it was used Chrome browser version 84, therefore if you have this version you don't need to do the step 4. 
5. Open terminal console and make sure you are in the root paht of the project, then install the dependencies by executing "npm install" command.

## Instructions to run the tests:
1. Open terminal console and make sure you are in the root paht of the project, then run the tests by executing "npm run test" command.
2. Pay attention while test runs in the browser. Both test mentioned in the Test Scope section will run one after the other, with a small interval of time between them.
3. Once test finish to run, in the console terminal of your IDE, you can see the testing summary report, with its corresponding steps, validations and results.
