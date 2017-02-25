import {AngularFire} from 'angularfire2';
import {Users} from 'Services/users';

export class Feedback {

    constructor (af, users) {
        this.db = af.database;
        this.users = users;

        this.feedbackO = af.auth.filter(authUser => authUser)
            .switchMap(authUser => {
                return this.db.list('/feedback', {
                    query: {
                        orderByChild: 'recipient/uid',
                        equalTo: authUser.uid
                    }
                })
                    .map(arr => arr.filter(el => !el.accepted));
            });
    }

    accept (feedback) {
        return this.db.object(`/feedback/${feedback.$key}`)
            .update({accepted: true});
    }

    send (item, recipient) {
        return this.users.currentUser
            .filter(user => !!user)
            .map(user => ({
                ...item,
                accepted: false,
                recipient: this.users.transformToDb(recipient),
                sender: this.users.transformToDb(user)
            }))
            .take(1)
            .do(feedback => {
                this.db.list('/feedback').push(feedback);
            });
    }

    remove (item) {
        this.data.$remove(item);
    }
}

Feedback.parameters = [
    [AngularFire],
    [Users]
];
