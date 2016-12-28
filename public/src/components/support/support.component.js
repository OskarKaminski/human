import template from './support.component.html';
import {Component} from '@angular/core';
import {ThankYou} from 'Services/thank-you';

export class SupportComponent {
    constructor(thankYouService){
        this.thankYouService = thankYouService;
    }

    thankYou(item){
        this.thankYouService.send(item);
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

SupportComponent.parameters = [
    [ThankYou]
];