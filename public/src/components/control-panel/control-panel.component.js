import template from './control-panel.component.html';
import {Component} from '@angular/core';
import {Feedback} from 'Services/feedback';

export class ControlPanelComponent {
    constructor(feedback){
        this._feedback = feedback;
    }

    acceptFeedback(feedback){
        this._feedback.accept(feedback);
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
    [Feedback]
];