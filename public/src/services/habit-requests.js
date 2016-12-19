import {AngularFire} from 'angularfire2';

export class HabitRequests {

    constructor(af) {
        this.db = af.database;
    }

    invitations(uid) {
        return this.db.list('/habit-requests', {
            query: {
                orderByChild: 'recipient/uid',
                equalTo: uid
            }
        })
    }

    send(item) {
        item.accepted = false;
        return this.db.list('/habit-requests')
            .push(item);
    }

    remove(item) {
        this.data.$remove(item);
    }
}

HabitRequests.parameters = [
    [AngularFire]
];