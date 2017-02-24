import template from './habits.component.html';
import {Component} from '@angular/core';
import './habits.component.scss';

export class HabitsComponent {
    constructor(){
    }
}

HabitsComponent.annotations = [
    new Component({
        selector: 'habits',
        template: template,
        inputs: [
            'data'
        ]
    })
];
