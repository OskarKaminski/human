import {Component} from '@angular/core';
import {Router} from '@angular/router'
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2'
import template from './login2.html';
import './login.scss';

export class Login {
    constructor(af, router) {
        this.authData = {};
        this.auth = af.auth;
        this.router = router;
    }

    ngOnInit() {
        this.auth.subscribe(auth => {
            if (auth) {
                this.router.navigateByUrl('/');
            }
        });
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

Login.annotations = [
    new Component({
        template
    })
];

Login.parameters = [
    [AngularFire],
    [Router]
];