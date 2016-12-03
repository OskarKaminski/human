import template from './login.html';

export const LoginPage = ({
    template: template,
    controller: LoginCtrl
});

function LoginCtrl(firebase, fbAuth, users) {

    const ref = firebase.auth();
    this.authData = {};

    this.login = ({email, password}) => {
        ref.signInWithEmailAndPassword(email, password);
    };

    this.loginWithFb = () => {
        firebase.auth().signInWithPopup(fbAuth).then(function(result) {
            users.getOrCreate(result.user);

        }).catch(function(error) {
            console.log(error);
        });
    }


}

LoginCtrl.$inject = ['firebase', 'fbAuth', 'users'];