import template from './private-dashboard2.html';
import {Component} from '@angular/core';
import {Users} from 'Services/users';

export class PrivateDashboard {

    // Template vars
    user;

    constructor(_users) {
        this._users = _users;
    }

    ngOnInit() {
        this._users.currentUser.subscribe(user => this.user = user);
    }
}

PrivateDashboard.annotations = [
    new Component({
        selector: 'private-dashboard',
        template: template
    })
];

PrivateDashboard.parameters = [
    [Users]
];