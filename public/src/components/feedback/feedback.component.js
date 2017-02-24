import template from './feedback.component.html';
import {Component} from '@angular/core';
import {Feedback} from 'Services/feedback';
import './feedback.component.scss';

export class FeedbackComponent {
    constructor(feedback){
        this._feedback = feedback;
    }

    acceptFeedback(feedback){
        this._feedback.accept(feedback);
    }
}

FeedbackComponent.annotations = [
    new Component({
        selector: 'feedback',
        template: template,
        inputs: [
            'data'
        ]
    })
];

FeedbackComponent.parameters = [
    [Feedback]
];
