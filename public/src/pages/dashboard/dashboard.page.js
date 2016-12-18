import template from './dashboard.page.html';
import {Component} from '@angular/core';
import {Users} from 'Services/users';

export class DashboardPage {

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

DashboardPage.annotations = [
    new Component({
        selector: 'dashboard',
        template: template
    })
];

DashboardPage.parameters = [
    [Users]
];