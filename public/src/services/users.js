import _ from 'lodash/lodash.min';
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';
import {Http} from '@angular/http';

export class Users {

    constructor (af, http) {
        this.af = af;
        this.auth = af.auth;
        this.http = http;
    }

    login (authData) {
        this.auth.login(authData, {
            method: AuthMethods.Password
        });
    }

    changeMood (value, userDBKey) {
        return this.af.database.object(`/users/${userDBKey}`)
            .update({currentMood: value});
    }

    //TODO - rewrite to redux
    loginWithFb () {
        this.auth.login({
            provider: AuthProviders.Facebook,
            method: AuthMethods.Popup
        }).then((userAuth) => {
            this.findUserByAuthId(userAuth.uid).toPromise()
                .then((user) => {
                    if (!user) {
                        this.createUserInDB(userAuth);
                    }
                })
        });
    }

    createUserInDB ({auth}, displayName) {
        return this.af.database.list('/users')
            .push({
                email: auth.email,
                uid: auth.uid,
                photoURL: auth.photoURL ||
                'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/WikiFont_uniE600_-_userAvatar_-_blue.svg/1024px-WikiFont_uniE600_-_userAvatar_-_blue.svg.png',
                displayName: auth.displayName || displayName,
                mastered: 0,
                points: 0
            });
    }

    transformToDb (user) {
        return _.pick(user,
            ['uid', 'photoURL', 'displayName', 'email']);
    }

    find (userId) {
        return this.af.database.object(`/users/${userId}`);
    }
}

Users.parameters = [
    [AngularFire],
    [Http]
];
