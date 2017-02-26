import template from './support.component.html';
import {Component} from '@angular/core';
import {ThankYou} from 'Services/thank-you';
import {Support} from 'Services/support';
import './support.component.scss';

export class SupportComponent {
    constructor(thankYouService, _support){
        this.thankYouService = thankYouService;
        this._support = _support;
    }

    ngOnInit() {
        this.support = this._support.supportO;
    }

    thankYou(item){
        this.thankYouService.send(item);
    }
}

SupportComponent.annotations = [
    new Component({
        template: template
    })
];

SupportComponent.parameters = [
    [ThankYou],
    [Support]
];
