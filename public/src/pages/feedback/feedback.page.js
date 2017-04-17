import template from './feedback.page.html';
import _ from 'lodash';
import {Component} from '@angular/core';
import './feedback.page.scss';
import {store} from '../../store/store';
import {fetchFeedback, acceptFeedback, rejectFeedback} from '../../store/feedback/actions';

@Component({
    selector: 'feedback',
    template: template,
    inputs: ['data']
})
export class FeedbackPage {
    constructor () {
        store.subscribe(this.updateFeedback.bind(this))
        store.dispatch(fetchFeedback(store.getState().currentUser.id))
    }

    updateFeedback () {
        this.feedback = _(store.getState().feedback)
            .filter(f => f)
            .groupBy('senderId')
            .map(group => ({
                displayName: group[0].displayName,
                photoURL: group[0].photoUrl,
                feedback: group
            }))
            .sortBy('displayName')
            .value();
    }

    accept (feedback) {
        store.dispatch(acceptFeedback(feedback.id));
    }

    reject (feedback) {
        store.dispatch(rejectFeedback(feedback.id));
    }
}
