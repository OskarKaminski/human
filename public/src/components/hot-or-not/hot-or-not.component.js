import template from './hot-or-not.component.html';
import {Component, EventEmitter} from '@angular/core';
import './hot-or-not.component.scss';

export class HotOrNotComponent {
    constructor(){
        this.actionHot = new EventEmitter();
        this.actionNot = new EventEmitter();
    }
}

HotOrNotComponent.annotations = [
    new Component({
        selector: 'hot-or-not',
        template: template,
        inputs: [
            'name'
        ],
        outputs: [
            'actionHot',
            'actionNot'
        ]
    })
];
