import template from './registration.html';

export const RegistrationPage = ({
    template: template,
    controller: RegistrationCtrl
});

function RegistrationCtrl(firebase, users) {

    this.auth = {};

    this.register = ({email, password, displayName}) => {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                const user = {
                    ...authUser,
                    displayName
                };
                return users.create(user);
            })
            .catch(error => {
                console.log(error);
            });
    }
}

RegistrationCtrl.$inject = ['firebase', 'users'];