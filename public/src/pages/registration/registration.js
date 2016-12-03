import template from './registration.html';

export const RegistrationPage = ({
    template: template,
    controller: RegistrationCtrl
});

function RegistrationCtrl(firebase, users) {

    this.auth = {};

    this.register = ({email, password}) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(users.create.bind(users))
            .catch(error => {
                console.log(error);
            });
    }
}

RegistrationCtrl.$inject = ['firebase', 'users'];