import {Component} from '@angular/core';
import {Router} from '@angular/router'
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2'
import {Users} from 'Services/users';
import template from './login.html';
import './login.scss';

export class Login {
    newUser;

    constructor(af, router, users) {
        this.authData = {};
        this.users = users;
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
        this.users.login(this.authData);
    }

    register() {
        this.auth.createUser({
            email: this.authData.email,
            password: this.authData.password
        }).then(authData => {
            this.users.createUserInDB(authData, this.displayName);
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
        this.users.loginWithFb();
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
    [Router],
    [Users]
];