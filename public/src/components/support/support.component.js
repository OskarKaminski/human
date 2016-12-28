import template from './support.component.html';
import {Component} from '@angular/core';

export class SupportComponent {
    constructor(){
    }
}

SupportComponent.annotations = [
    new Component({
        selector: 'support',
        template: template,
        inputs: [
            'data'
        ]
    })
];