import template from './registration.html';

export const RegistrationPage = ({
    template: template,
    controller: RegistrationCtrl
});

function RegistrationCtrl(firebase) {

    this.auth = {};

    this.register = ({email, password}) => {

        console.log(firebase);
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            console.log(error);
            var errorMessage = error.message;
        });
    }
}

RegistrationCtrl.$inject = ['firebase'];