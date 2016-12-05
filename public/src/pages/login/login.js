import template from './login2.html';
import './login.scss';

export const LoginPage = ({
    template: template,
    controller: LoginCtrl
});

function LoginCtrl(firebase, fbAuth, users, state) {

    const ref = firebase.auth();
    this.authData = {};

    this.login = ({email, password}) => {
        ref.signInWithEmailAndPassword(email, password)
            .then(user => {
                if(user){
                    state.go('App.UserPrivateDashboard');
                }
                console.log(user);
            });
    };

    this.loginWithFb = () => {
        firebase.auth().signInWithPopup(fbAuth).then(function(result) {
            users.getOrCreate(result.user);
            state.go('App.UserPrivateDashboard');

        }).catch(function(error) {
            console.log(error);
        });
    }


}

LoginCtrl.$inject = ['firebase', 'fbAuth', 'users', '$state'];