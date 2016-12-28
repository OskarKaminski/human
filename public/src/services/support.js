import {AngularFire} from 'angularfire2';

export class Support {

    constructor(af) {
        this.db = af.database;
        this.supportO = af.auth.filter(authUser => authUser)
            .switchMap(authUser => {
                return this.db.list('/feedback', {
                    query: {
                        orderByChild: 'sender/uid',
                        equalTo: authUser.uid
                    }
                }).map(arr => arr.filter(el => el.accepted));
            });
    }

    thankYou(item) {
        return this.db.list(`/feedback/${item.$key}/points`)
            .push({
                test: 'thank you!'
            });
    }
}

Support.parameters = [
    [AngularFire]
];