import {AngularFire} from 'angularfire2';
import {Http} from '@angular/http';
import {Users} from 'Services/users';

const groupBySender = (arr) => {
    return _(arr)
        .groupBy('user.displayName')
        .map(group => ({
            displayName: group[0].user.displayName,
            photoURL: group[0].user.photoUrl,
            feedback: _.values(group)
        }))
        .sortBy('displayName')
        .value();
}

export class Feedback {

    constructor (af, users, http) {
        this.db = af.database;
        this.users = users;
        this.http = http;
        this.feedbackO = this.getMyFeedback();
    }

    getMyFeedback(){
        return this.http.get(`http://localhost:5000/api/feedback/${this.users.currentUser.id}`)
            .map(response => JSON.parse(response._body))
            .map(groupBySender)
            .do(console.log);
    }

    accept (feedback) {
        return this.db.object(`/feedback/${feedback.$key}`)
            .update({accepted: true});
    }

    reject (feedback) {
        return this.db.object(`/feedback/${feedback.$key}`)
            .update({rejected: true});
    }

    send (item, recipient) {
        return this.http.post('http://localhost:5000/api/feedback', {
            ...item,
            sender: 2,
            recipient: 2
        })
    }

    remove (item) {
        this.data.$remove(item);
    }
}

Feedback.parameters = [
    [AngularFire],
    [Users],
    [Http]
];
