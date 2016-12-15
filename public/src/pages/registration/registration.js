import template from './registration.html';
import {Component} from '@angular/core';
import {AngularFire} from 'angularfire2';

export class Registration {

    auth = {};

    constructor(af) {
        this.auth = af.auth;
        this.af = af;
    }

    register(email, password, e) {
        e.preventDefault();
        return this.auth.createUser({email, password})
            .then(({auth}) => {
                return this.af.database.list('/users')
                    .push({
                        email: auth.email,
                        uid: auth.uid,
                        displayName: this.displayName
                    });
            });
    }
}

Registration.annotations = [
    new Component({
        selector: 'registration',
        template: template
    })
];

Registration.parameters = [
    [AngularFire]
];