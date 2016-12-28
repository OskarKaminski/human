import {AngularFire} from 'angularfire2';
import 'rxjs';

export class Habits {

    constructor(af) {
        this.habitsO = af.auth.filter(authUser => authUser)
            .switchMap(authUser => {
                return af.database.list('/feedback', {
                    query: {
                        orderByChild: 'recipient/uid',
                        equalTo: authUser.uid
                    }
                }).map(arr => arr
                    .filter(el => el.accepted)
                    .map(el => ({
                        ...el,
                        points: el.points ? Object.keys(el.points).length : 0,
                        completeness: el.points ? 10 / Object.keys(el.points).length : 0
                    }))
                )
            });

        this.pointsEarnedO = this.habitsO
            .map(arr => arr.reduce((acc, curr) => {
                return curr.points ? acc + curr.points : acc;
            }, 0));
    }
}

Habits.parameters = [
    [AngularFire]
];