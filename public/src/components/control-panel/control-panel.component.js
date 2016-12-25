import template from './control-panel.component.html';
import {Component} from '@angular/core';

export class ControlPanelComponent {
    constructor(){
    }

    acceptFeedback(feedback){
        console.log(feedback);
    }
}

ControlPanelComponent.annotations = [
    new Component({
        selector: 'control-panel',
        template: template,
        inputs: [
            'invitations'
        ]
    })
];

ControlPanelComponent.parameters = [
];