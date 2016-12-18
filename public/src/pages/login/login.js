import {Component} from '@angular/core';
import {Router} from '@angular/router'
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2'
import template from './login.html';
import './login.scss';

export class Login {
    newUser;

    constructor(af, router) {
        this.authData = {};
        this.af = af;
        this.auth = af.auth;
        this.router = router;
    }

    ngOnInit() {
        this.loginObservable = this.auth.subscribe((user) => {
            if (user) {
                return this.router.navigateByUrl('/');
            }
        });
    }

    login() {
        this.auth.login(this.authData, {
            method: AuthMethods.Password
        });
    }

    register() {
        this.auth.createUser({
            email: this.authData.email,
            password: this.authData.password
        }).then(({auth}) => {
            return this.af.database.list('/users')
                .push({
                    email: auth.email,
                    uid: auth.uid,
                    displayName: this.displayName
                });
        });
    }

    nextStep(e) {
        e.preventDefault();
        this.newUser ? this.register() : this.login();
    }

    verifyEmail(email) {
        return this.af.database.list('/users', {
            query: {
                orderByChild: 'email',
                equalTo: email
            }
        })
            .map(arr => arr[0])
            .subscribe(user => {
                this.newUser = !user;
            });
    }

    loginWithFb() {
        this.auth.login({
            provider: AuthProviders.Facebook,
            method: AuthMethods.Popup
        });
    }

    ngOnDestroy(){
        this.loginObservable.unsubscribe();
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