import {AngularFire} from 'angularfire2';

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

    accept(feedback){
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