import {Component, EventEmitter} from '@angular/core'
import template from './send-challenge.component.html';
import './send-challenge.component.scss';

export class SendChallengeComponent {

    constructor(){
        this.onSend = new EventEmitter();
    }

    send(e) {
        e.preventDefault();
        this.onSend.emit(this.value);
        this.value = '';
    }
}

SendChallengeComponent.annotations = [
    new Component({
        selector: 'send-challenge',
        template,
        inputs: [
            'type'
        ],
        outputs: [
            'onSend'
        ]
    })
];