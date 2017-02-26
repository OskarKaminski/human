import template from './dashboard.page.html';
import {Component} from '@angular/core';
import {Users} from 'Services/users';
import {Feedback} from 'Services/feedback';
import {Habits} from 'Services/habits';
import './dashboard-page.scss';

export class DashboardPage {

    // Template vars
    currentUser;

    constructor(_users, _feedback, _habits) {
        this._users = _users;
        this._feedback = _feedback;
        this._habits = _habits;
    }

    ngOnInit() {
        this.currentUserO = this._users.currentUser
            .subscribe(user => this.currentUser = user);

        this.feedbackO = this._feedback.feedbackO
            .subscribe(feedback => this.feedback = feedback);

        this.habitsO = this._habits.habitsO
            .subscribe(habits => this.habits = habits);

        this.pointsEarnedO = this._habits.pointsEarnedO
            .subscribe(points => this.pointsEarned = points);
    }

    moodChanged(value) {
        return this._users.changeMood(value, this.currentUser.$key);
    }

    ngOnDestroy() {
        this.currentUserO.unsubscribe();
        this.habitsO.unsubscribe();
        this.feedbackO.unsubscribe();
        this.pointsEarnedO.unsubscribe();
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
    [Feedback],
    [Habits]
];
