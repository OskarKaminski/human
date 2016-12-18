import template from './users.page.html';
import {Component} from '@angular/core';
import {AngularFire} from 'angularfire2';

export class Users {
    constructor(af) {
        this.users = af.database.list('/users');
    }
}

Users.annotations = [
    new Component({
        selector: 'users',
        template: template
    })
];

Users.parameters = [
    [AngularFire]
];