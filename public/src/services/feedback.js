import {AngularFire} from 'angularfire2';
import 'rxjs';

export class Feedback {

    constructor(af) {
        this.db = af.database;

        this.feedbackO = af.auth.filter(authUser => authUser)
            .switchMap(authUser => {
                return this.db.list('/feedback', {
                    query: {
                        orderByChild: 'recipient/uid',
                        equalTo: authUser.uid
                    }
                }).map(arr => arr.filter(el => !el.accepted));
            });
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