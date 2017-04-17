import template from './habits.page.html';
import {Component} from '@angular/core';
import './habits.page.scss';
import {Habits} from 'Services/habits';

@Component({
    selector: 'habits',
    template: template
})
export class HabitsPage {
    static parameters = [[Habits]]
    constructor(_habits){
        this._habits = _habits;
    }

    ngOnInit() {
        this.habitCategories = this._habits.byType();
    }
}
