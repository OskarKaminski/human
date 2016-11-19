import template from './login.html';

export const LoginPage = ({
    template: template,
    controller: LoginCtrl
});

function LoginCtrl(auth) {

    var auth = $firebaseAuth();

    // login with Facebook
    auth.$signInWithPopup("facebook").then(function(firebaseUser) {
        console.log("Signed in as:", firebaseUser.uid);
    }).catch(function(error) {
        console.log("Authentication failed:", error);
    });
}

LoginCtrl.$inject = ['firebase', '$firebaseAuth'];