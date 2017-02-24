import template from './mashall.component.html';
import {Component, EventEmitter} from '@angular/core';
import './marshall.component.scss';

export class MarshallComponent {

    constructor () {
        this.onChoose = new EventEmitter();
    }

    clicked (type) {
        this.type = type;
        this.onChoose.emit(type);
    }
}

MarshallComponent.annotations = [
    new Component({
        selector: 'marshall',
        template,
        inputs: [
            'active'
        ],
        outputs: [
            'onChoose'
        ]
    })
];
