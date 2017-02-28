import {AngularFire} from 'angularfire2';
import _ from 'lodash/lodash.min';

const calcCompleteness = (points) => {
    return points < 10 ? points * 10 : 100;
}

export class Habits {

    constructor (af) {
        this.habitsO = af.auth.filter(authUser => authUser)
            .switchMap(authUser => {
                return af.database.list('/feedback', {
                    query: {
                        orderByChild: 'recipient/uid',
                        equalTo: authUser.uid
                    }
                })
            })
            .map(arr => arr
                .filter(el => el.accepted)
                .map(this.extendByPointsNumber)
                .map(this.extendByCompleteness)
            );
    }

    extendByPointsNumber = (el) => ({
        ...el,
        points: el.points ? Object.keys(el.points).length : 0
    })

    extendByCompleteness = (el) => ({
        ...el,
        completeness: calcCompleteness(el.points)
    })

    byType () {
        return this.habitsO
            .map(arr => _.groupBy(arr, 'type'));
    }
}

Habits.parameters = [
    [AngularFire]
];
