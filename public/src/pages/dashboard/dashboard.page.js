import template from './dashboard.page.html';
import {Component} from '@angular/core';
import {Habits} from 'Services/habits';
import {store} from '../../store/store';
import './dashboard-page.scss';
import _ from 'lodash/lodash.min';

export class DashboardPage {

    // Template vars
    currentUser;

    constructor(_habits) {
        this._habits = _habits;
    }

    ngOnInit() {
        this.currentUser = store.getState().currentUser;

        this.points = this._habits.habitsO
            .map(arr => _.sumBy(arr, 'points'));
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
    [Habits]
];
