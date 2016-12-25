import template from './dashboard.page.html';
import {Component} from '@angular/core';
import {Users} from 'Services/users';
import {Feedback} from 'Services/feedback';

export class DashboardPage {

    // Template vars
    currentUser;

    constructor(_users, _feedback) {
        this._users = _users;
        this._feedback = _feedback;
    }

    ngOnInit() {
        this.currentUserObservable = this._users.currentUser
            .subscribe((currentUser)=> {
                this.currentUser = currentUser;

                this._feedback.invitations(currentUser.uid)
                    .subscribe(feedback => {
                        this.invitationsToHabits = feedback;
                    })
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
    [Feedback]
];