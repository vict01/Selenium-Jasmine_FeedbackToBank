class TestSuites {
    get suiteNames() {
        return {
            happyPath: 'Happy Path',
            negativeTestCase: 'Negative Test Case',
        }
    }
}

module.exports = new TestSuites();
