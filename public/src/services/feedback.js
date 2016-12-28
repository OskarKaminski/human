import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';
import 'rxjs';

export class Feedback {

    constructor(af) {
        this.db = af.database;
    }

    invitations(uid) {
        return this.db.list('/feedback', {
            query: {
                orderByChild: 'recipient/uid',
                equalTo: uid
            }
        })
    }

    find(uid) {
        const recipient = this.db.list('/feedback', {
            query: {
                orderByChild: 'recipient/uid',
                equalTo: uid
            }
        }).map(arr => ({
            feedback: arr.filter(el => !el.accepted),
            habits: arr.filter(el => el.accepted)
        }));

        const sender = this.db.list('/feedback', {
            query: {
                orderByChild: 'sender/uid',
                equalTo: uid
            }
        }).map(arr => ({
            support: arr.filter(el => el.accepted)
        }));

        return Observable.combineLatest(recipient, sender, (r, s) => ({
            ...r,
            ...s
        }));
    }

    accept(feedback) {
        return this.db.object(`/feedback/${feedback.$key}`)
            .update({accepted: true});
    }

    send(item) {
        item.accepted = false;
        this.db.list('/feedback')
            .push(item);
    }

    remove(item) {
        this.data.$remove(item);
    }
}

Feedback.parameters = [
    [AngularFire]
];