import template from './login.html';

export const LoginPage = ({
    template: template,
    controller: LoginCtrl
});

function LoginCtrl(users) {

    this.login = (username) => {
        this.user = users.findByName(username);
        console.log(this.user);
    }
}

LoginCtrl.$inject = ['users'];