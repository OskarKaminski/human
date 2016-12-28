import template from './dashboard.page.html';
import {Component} from '@angular/core';
import {Users} from 'Services/users';
import {Feedback} from 'Services/feedback';
import 'rxjs';

export class DashboardPage {

    // Template vars
    currentUser;

    constructor(_users, _feedback) {
        this._users = _users;
        this._feedback = _feedback;
    }

    ngOnInit() {
        this.currentUserObservable = this._users.currentUser
            .filter(user => user)
            .concatMap(user => {
                return this._feedback.find(user.uid)
                    .map(feedback => ({
                        user,
                        feedback
                    }));
            }).subscribe(obj => {
                this.currentUser = obj.user;
                this.feedback = obj.feedback.feedback;
                this.habits = obj.feedback.habits;
                this.support = obj.feedback.support;
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