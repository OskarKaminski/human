import template from './private-dashboard2.html';
import {Component} from '@angular/core';
import {Users} from 'Services/users';

export class PrivateDashboard {

    // Template vars
    currentUser;

    constructor(_users) {
        this._users = _users;
    }

    ngOnInit() {
        this._users.currentUser.subscribe(user => {
            this.currentUser = user
        });
    }

    moodChanged(value) {
        return this._users.changeMood(value, this.currentUser.$key);
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