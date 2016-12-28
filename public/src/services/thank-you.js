import {AngularFire} from 'angularfire2';

export class ThankYou {

    constructor(af) {
        this.db = af.database;
    }

    send(item) {
        console.log({'item': item});
        return this.db.list(`/feedback/${item.$key}/points`)
            .push({
                test: 'thank you!'
            });
    }
}

ThankYou.parameters = [
    [AngularFire]
];