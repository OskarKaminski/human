import template from './umpire.page.html';
import {Component} from '@angular/core';
import {Umpire} from 'Services/umpire';
import {Support} from 'Services/support';
import './umpire.page.scss';

export class UmpirePage {
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

UmpirePage.annotations = [
    new Component({
        template: template
    })
];

UmpirePage.parameters = [
    [Umpire],
    [Support]
];
