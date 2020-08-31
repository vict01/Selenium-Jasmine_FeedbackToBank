class feedback_constants {

    get attributes() {
        return {
            id: {
                name: 'name',
                email: 'email',
                subject: 'subject',
                comment: 'comment'
            },
            class: {
                sendBnt: 'btn-signin'
            }
        }
    }

    get testData() {
        return {
            nameData: 'Hector García',
            emailData: 'hector@yopmail.com',
            subjectData: 'Error message',        
            msgData: 'I cannot do cash advances from your platform, due to an error message',         
            urlSuccessfulSend: 'http://zero.webappsecurity.com/sendFeedback.html',
            alertEmptyField: 'Please fill out this field.',  
            noAlertEmptyField: ''
        }
    }

}

module.exports = new feedback_constants();
