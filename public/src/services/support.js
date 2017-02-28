import {AngularFire} from 'angularfire2';
import _ from 'lodash/lodash.min';
import {canSupport} from 'Domain/support/support';

const groupByRecipient = (arr) => {
    return _(arr)
        .groupBy('recipient.displayName')
        .map(group => ({
            displayName: group[0].recipient.displayName,
            photoURL: group[0].recipient.photoURL,
            habits: _.values(group)
        }))
        .sortBy('displayName')
        .value();
}

export class Support {

    constructor (af) {
        this.db = af.database;
        this.supportO = af.auth.filter(authUser => authUser)
            .switchMap(this.getByUserId.bind(this))
            .map(arr => arr.filter(el => el.accepted))
            .map(this.checkIfSupported.bind(this))
            .map(arr => arr.filter(el => el.active))
            .map(groupByRecipient);
    }

    getByUserId (authUser) {
        return this.db.list('/feedback', {
            query: {
                orderByChild: 'sender/uid',
                equalTo: authUser.uid
            }
        });
    }

    checkIfSupported (arr) {
        return arr.map(el => ({
            ...el,
            $key: el.$key,
            active: canSupport(el.lastSupport)
        }));
    }

    thankYou (item) {
        return this.db.list(`/feedback/${item.$key}/points`)
            .push({
                test: 'thank you!'
            });
    }
}

Support.parameters = [
    [AngularFire]
];
