import {AngularFire} from 'angularfire2';
import moment from 'moment';

export class ThankYou {

    constructor(af) {
        this.db = af.database;
    }

    send(item) {
        const today = moment().format('YYYY-MM-DD');
        this.db.object(`/feedback/${item.$key}`)
            .update({lastSupport: today});
        return this.db.list(`/feedback/${item.$key}/points`)
            .push({
                test: 'thank you!'
            });
    }
}

ThankYou.parameters = [
    [AngularFire]
];
