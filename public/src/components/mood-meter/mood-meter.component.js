import {Component, EventEmitter} from '@angular/core';
import template from './mood-meter.component.html';
import './mood-meter.component.scss';

export class MoodMeterComponent {

    constructor(){
        this.onChange = new EventEmitter();
    }

    changeMood(value) {
        this.current = value;
        this.onChange.emit(value)
    }
}

MoodMeterComponent.annotations = [
    new Component({
        selector: 'mood-meter',
        template,
        inputs: [
            'current'
        ],
        outputs: [
            'onChange'
        ]
    })
];
