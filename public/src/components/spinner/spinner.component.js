import template from './spinner.component.html';
import {Component} from '@angular/core';
import './spinner.component.scss';

export class SpinnerComponent {
    constructor(){
        this.visible = false;
    }
}

SpinnerComponent.annotations = [
    new Component({
        selector: 'spinner',
        template: template
    })
];