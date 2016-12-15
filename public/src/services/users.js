import _ from 'lodash';
import {AngularFire} from 'angularfire2';
import 'rxjs/add/operator/map';

export class Users {

    constructor(af) {
        this.auth = af.auth;
        this.af = af;

        // TODO - probably to move out
        this.userIdObservable = this.auth
            .map(user => {
                return user.uid;
            });
    }

    get currentUser() {
        return this.af.database.list('/users', {
            query: {
                orderByChild: 'uid',
                equalTo: this.userIdObservable
            }
        }).map(arr => arr[0]);
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