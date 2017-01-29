import template from './dashboard.page.html';
import {Component} from '@angular/core';
import {Users} from 'Services/users';
import {Feedback} from 'Services/feedback';
import {Support} from 'Services/support';
import {Habits} from 'Services/habits';
import './dashboard-page.scss';
import 'rxjs';

export class DashboardPage {

    // Template vars
    currentUser;

    constructor(_users, _feedback, _support, _habits) {
        this._users = _users;
        this._feedback = _feedback;
        this._support = _support;
        this._habits = _habits;
    }

    ngOnInit() {
        this.currentUserO = this._users.currentUser
            .filter(user => user)
            .subscribe(user => this.currentUser = user);

        this.supportO = this._support.supportO
            .subscribe(support => this.support = support);

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
        this.supportO.unsubscribe();
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
    [Support],
    [Habits]
];