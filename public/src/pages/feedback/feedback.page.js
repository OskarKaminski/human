import template from './feedback.page.html';
import {Component} from '@angular/core';
import {Feedback} from 'Services/feedback';
import './feedback.page.scss';
import {store} from '../../store/store';

export class FeedbackPage {
    constructor(feedback){
        this._feedback = feedback;
        // this.feedback = this._feedback.feedbackO;
        store.dispatch({
            type: 'FETCH_FEEDBACK',
            userId: 2
        })
        setTimeout(() => console.log(store.getState()), 2000);
    }

    accept(feedback){
        this._feedback.accept(feedback);
    }

    reject(feedback){
        this._feedback.reject(feedback);
    }

}

FeedbackPage.annotations = [
    new Component({
        selector: 'feedback',
        template: template,
        inputs: [
            'data'
        ]
    })
];

FeedbackPage.parameters = [
    [Feedback]
];
