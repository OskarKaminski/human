import template from './mashall-circle.component.html';
import {Component, EventEmitter} from '@angular/core';
import './marshall-circle.component.scss';

export class MarshallCircleComponent {

    constructor() {
        this.onChoose = new EventEmitter();
    }

    clicked(type) {
        this.type = type;
        this.onChoose.emit(type);
    }
}

MarshallCircleComponent.annotations = [
    new Component({
        selector: 'marshall-circle',
        template,
        outputs: [
            'onChoose'
        ]
    })
];