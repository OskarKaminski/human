import {AngularFire} from 'angularfire2';
import {Users} from 'Services/users';

export class Feedback {

    constructor (af, users) {
        this.db = af.database;
        this.users = users;
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
    [Users]
];
