import template from './support.component.html';
import {Component} from '@angular/core';
import {Umpire} from 'Services/umpire';
import {Support} from 'Services/support';
import './support.component.scss';

export class SupportComponent {
    constructor(_umpire, _support){
        this.umpire = _umpire;
        this._support = _support;
    }

    ngOnInit() {
        this.support = this._support.supportO;
    }

    accept(item){
        this.umpire.accept(item);
    }

    ignore(item){
        this.umpire.ignore(item);
    }
}

SupportComponent.annotations = [
    new Component({
        template: template
    })
];

SupportComponent.parameters = [
    [Umpire],
    [Support]
];
