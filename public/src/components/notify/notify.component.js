import template from './notify.component.html';
import {Component} from '@angular/core';
import './notify.component.scss';

export class NotifyComponent {
    constructor(){
        this.visible = false;
    }
}

NotifyComponent.annotations = [
    new Component({
        selector: 'notify',
        template: template,
        inputs: [
            'data'
        ]
    })
];