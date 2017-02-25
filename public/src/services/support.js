import {AngularFire} from 'angularfire2';
import {canSupport} from 'Domain/support/support';

export class Support {

    constructor(af) {
        this.db = af.database;
        this.supportO = af.auth.filter(authUser => authUser)
            .switchMap(this.getByUserId.bind(this))
            .map(arr => arr.filter(el => el.accepted))
            .map(this.checkIfSupported.bind(this))
            .do(console.log);
    }

    getByUserId(authUser){
        return this.db.list('/feedback', {
            query: {
                orderByChild: 'sender/uid',
                equalTo: authUser.uid
            }
        });
    }

    checkIfSupported(arr) {
        return arr.map(el => ({
            ...el,
            active: canSupport(el.lastSupport)
        }));
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
