import _ from 'lodash';
import {AngularFire} from 'angularfire2';
import 'rxjs/add/operator/map';
import 'rxjs';

export class Users {

    constructor(af) {
        this.af = af;
        this.auth = af.auth;

        const authObservable = this.auth;
        this.currentUserObservable = authObservable
            .flatMap(this.getCurrentUser.bind(this));
    }

    getCurrentUser(userAuth) {
        return this.af.database.list('/users', {
            query: {
                orderByChild: 'uid',
                equalTo: userAuth.uid
            }
        }).map(arr => arr[0]);
    }

    changeMood(value, userDBKey) {
        return this.af.database.object(`/users/${userDBKey}`)
            .update({currentMood: value});
    }

    getOrCreate(userAuthData) {
        this.find(userAuthData.uid).then(val => {
            if (!val) {
                this.create(userAuthData);
            }
        });
    }

    create(userAuthData) {
        const newUser = _.pick(
            userAuthData,
            ['uid', 'photoURL', 'displayName', 'email']
        );

        var newUserRef = this.usersRef.push();
        newUserRef.set(newUser);
    }

    find(userId) {
        return this.usersRef
            .orderByChild('uid')
            .equalTo(userId)
            .once('value')
            .then(snapshot => {
                return _.map(snapshot.val(), (obj, key)=> {
                    return {
                        ...obj,
                        dbKey: key
                    }
                })[0];
            });
    }
}

Users.parameters = [
    [AngularFire]
];