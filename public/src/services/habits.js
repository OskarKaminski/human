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
                }).map(arr => arr.filter(el => el.accepted));
            });
    }
}

Habits.parameters = [
    [AngularFire]
];