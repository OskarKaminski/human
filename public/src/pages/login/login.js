import {Component} from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2'
import template from './login2.html';
import './login.scss';

export class LoginPage {
    constructor(af) {
        this.authData = {};
        this.auth = af.auth;
        this.auth.subscribe(auth => console.log(auth));
    }

    login(e) {
        e.preventDefault();
        this.auth.login(this.authData, {
            method: AuthMethods.Password
        });
    }

    loginWithFb() {
        this.auth.login({
            provider: AuthProviders.Facebook,
            method: AuthMethods.Popup
        });
    }

}

LoginPage.annotations = [
    new Component({template})
];

LoginPage.parameters = [
    [AngularFire]
];