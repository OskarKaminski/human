import {AngularFire} from 'angularfire2';
import moment from 'moment';
import _ from 'lodash/lodash.min';

export class Umpire {

    constructor (af) {
        this.db = af.database;
    }

    accept (item) {
        const mastered = _.keys(item.points).length === 9;
        this.updateMastered(item, mastered);
        this.updateLastEvaluation(item);
        const points = this.db.list(`/feedback/${item.$key}/points`)
            .push({test: 'thank you!'});
    }

    ignore (item) {
        this.updateLastEvaluation(item);
    }

    updateLastEvaluation (item) {
        const today = moment().format('YYYY-MM-DD');
        this.db.object(`/feedback/${item.$key}`)
            .update({lastSupport: today});
    }

    updateMastered (item, mastered) {
        this.db.object(`/feedback/${item.$key}`)
            .update({mastered});

        if(mastered) {
            const recipient = this.db.list(`/users`, {
                query: {
                    orderByChild: 'uid',
                    equalTo: item.recipient.uid
                }
            });

            recipient
                .map(r => r[0])
                .take(1)
                .subscribe(r => {
                    const mastered = r.mastered || 0;
                    this.db.object(`/users/${r.$key}`)
                        .update({mastered: mastered + 1})
                });
        }
    }
}

Umpire.parameters = [
    [AngularFire]
];
