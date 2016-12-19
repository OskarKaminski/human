import template from './dashboard.page.html';
import {Component} from '@angular/core';
import {Users} from 'Services/users';
import {HabitRequests} from 'Services/habit-requests';

export class DashboardPage {

    // Template vars
    currentUser;

    constructor(_users, _habitRequests) {
        this._users = _users;
        this._habitRequests = _habitRequests;
    }

    ngOnInit() {
        this.currentUserObservable = this._users.currentUserObservable
            .subscribe(user => {
                this.currentUser = user;
                this._habitRequests.invitations(user.uid)
                    .subscribe(invitations => {
                        this.invitationsToHabits = invitations;
                    });
            });
    }

    moodChanged(value) {
        return this._users.changeMood(value, this.currentUser.$key);
    }

    ngOnDestroy() {
        this.currentUserObservable.unsubscribe();
    }
}

DashboardPage.annotations = [
    new Component({
        selector: 'dashboard',
        template: template
    })
];

DashboardPage.parameters = [
    [Users],
    [HabitRequests]
];