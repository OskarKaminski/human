import template from './settings.page.html';
import {Component} from '@angular/core';
import {Users} from 'Services/users';

export class SettingsPage {

    // Template vars
    currentUser;

    constructor(_users) {
        this._users = _users;
    }

    ngOnInit() {
        this.currentUserObservable = this._users.currentUser
            .subscribe((currentUser)=> {
                this.currentUser = currentUser;
            });
    }

    ngOnDestroy() {
        this.currentUserObservable.unsubscribe();
    }
}

SettingsPage.annotations = [
    new Component({
        selector: 'settings',
        template: template
    })
];

SettingsPage.parameters = [
    [Users]
];