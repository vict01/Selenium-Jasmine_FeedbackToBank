class CommonConstant {
    get commonData() {
        return {
            applicationUrl: 'http://zero.webappsecurity.com/index.html',
            defaultTimeout: 45000,
            implicitWaitDefaultTimeout: 30000            
        }
    }

    get attributes() {
        return {
            class: {
                brand: 'brand',
            }
        }
    }

    get timeouts() {
        return {
            xs: 5000,
            s: 10000,
        }
    }
}

module.exports = new CommonConstant();
