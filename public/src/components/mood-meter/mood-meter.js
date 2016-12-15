import {Component, EventEmitter} from '@angular/core';
import template from './mood-meter.html';
import './mood-meter.scss';

export class MoodMeter {

    emoji = {
        perfect: '😁',
        well: '🙂',
        sad: '😢',
        angry: '😤'
    };

    constructor(){
        this.onChange = new EventEmitter();
        this.current = this.current || 'well';
    }

    changeMood(value) {
        this.current = value;
        this.onChange({value})
    }
}

MoodMeter.annotations = [
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