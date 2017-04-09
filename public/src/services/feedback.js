import {AngularFire} from 'angularfire2';
import {Users} from 'Services/users';

export class Feedback {

    constructor (af, users) {
        this.db = af.database;
        this.users = users;
    }

    send (item, recipient) {
        return this.http.post('http://localhost:5000/api/feedback', {
            ...item,
            sender: 2,
            recipient: 2
        })
    }
}

Feedback.parameters = [
    [AngularFire],
    [Users]
];
