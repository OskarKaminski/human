import {AngularFire} from 'angularfire2';
import moment from 'moment';

export class Umpire {

    constructor (af) {
        this.db = af.database;
    }

    accept (item) {
        this.updateLastEvaluation(item);
        return this.db.list(`/feedback/${item.$key}/points`)
            .push({
                test: 'thank you!'
            });
    }

    ignore (item) {
        this.updateLastEvaluation(item);
    }

    updateLastEvaluation (item) {
        const today = moment().format('YYYY-MM-DD');
        this.db.object(`/feedback/${item.$key}`)
            .update({lastSupport: today});
    }
}

Umpire.parameters = [
    [AngularFire]
];
