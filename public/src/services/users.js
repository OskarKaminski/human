import _ from 'lodash';
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';

export class Users {

    constructor(af) {
        this.af = af;
        this.auth = af.auth;

        this.currentUser = this.auth.switchMap((authUser)=> {
            return this.findUserById(authUser.uid)
        });
    }

    login(authData) {
        this.auth.login(authData, {
            method: AuthMethods.Password
        });
    }

    findUserById(id) {
        return this.af.database.list('/users', {
            query: {
                orderByChild: 'uid',
                equalTo: id
            }
        }).map(arr => arr[0]);
    }

    changeMood(value, userDBKey) {
        return this.af.database.object(`/users/${userDBKey}`)
            .update({currentMood: value});
    }

    loginWithFb() {
        this.auth.login({
            provider: AuthProviders.Facebook,
            method: AuthMethods.Popup
        }).then((userAuth)=> {
            this.findUserById(userAuth.uid).toPromise()
                .then((user)=> {
                    if (!user) {
                        this.createUserInDB(userAuth);
                    }
                })
        });
    }

    createUserInDB({auth}, displayName) {
        return this.af.database.list('/users')
            .push({
                email: auth.email,
                uid: auth.uid,
                photoURL: auth.photoURL ||
                'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/WikiFont_uniE600_-_userAvatar_-_blue.svg/1024px-WikiFont_uniE600_-_userAvatar_-_blue.svg.png',
                displayName: auth.displayName || displayName
            });
    }


    transformToDb(user) {
        return _.pick(user,
            ['uid', 'photoURL', 'displayName', 'email']);
    }

    find(userId) {
        return this.af.database.object(`/users/${userId}`);
    }
}

Users.parameters = [
    [AngularFire]
];