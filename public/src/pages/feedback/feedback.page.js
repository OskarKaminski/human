import template from './feedback.page.html';
import _ from 'lodash';
import {Component} from '@angular/core';
import {Feedback} from 'Services/feedback';
import './feedback.page.scss';
import {store} from '../../store/store';
import {fetchFeedback} from '../../store/feedback/actions';

export class FeedbackPage {
    constructor (feedback) {
        this._feedback = feedback;
        store.subscribe(this.updateFeedback.bind(this))
        store.dispatch(fetchFeedback(store.getState().currentUser.id))
    }

    updateFeedback () {
        this.feedback = _(store.getState().feedback)
            .filter(f => f)
            .groupBy('senderId')
            .map(group => ({
                displayName: group[0].user.displayName,
                photoURL: group[0].user.photoUrl,
                feedback: group
            }))
            .sortBy('displayName')
            .value();
    }

    accept (feedback) {
        this._feedback.accept(feedback);
    }

    reject (feedback) {
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
