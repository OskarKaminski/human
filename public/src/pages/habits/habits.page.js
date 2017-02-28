import template from './habits.page.html';
import {Component} from '@angular/core';
import './habits.page.scss';
import {Habits} from 'Services/habits';

export class HabitsPage {
    constructor(_habits){
        this._habits = _habits;
    }

    ngOnInit() {
        this.habitCategories = this._habits.byType();
    }
}

HabitsPage.annotations = [
    new Component({
        selector: 'habits',
        template: template
    })
];

HabitsPage.parameters = [
    [Habits]
];
