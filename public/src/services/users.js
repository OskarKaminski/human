import _ from 'lodash/lodash.min';
import moment from 'moment';
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2'
import {Subject, Observable} from 'rxjs';

export class Users {

    constructor (af) {
        this.af = af;
        this.auth = af.auth;

        this.currentUser = this.getCurrentUser();

        this.newAwardO = new Subject();
        this.awardedUserO = this.newAwardO
            .switchMap(({userId}) => this.findUserById(userId));

        // this.awardedUserO = this.newAwardO
        //     .map(({userId, habitId}) => {
        //         return {
        //             user: this.findUserById(userId),
        //             habitId: Observable.of(habitId)
        //         }
        //     });

        this.newAwardO
            .combineLatest(this.awardedUserO, ({habitId}, user) => ({
                habitId,
                user
            }))
            .do(console.log)
            .subscribe();

        // this.addPointO =
    }

    login (authData) {
        this.auth.login(authData, {
            method: AuthMethods.Password
        });
    }

    getCurrentUser () {
        return this.auth
            .filter(user => user)
            .switchMap(authUser => this.findUserById(authUser.uid));
    }

    findUserById (id) {
        return this.af.database.list('/users', {
            query: {
                orderByChild: 'uid',
                equalTo: id
            }
        }).map(arr => arr[0]);
    }

    changeMood (value, userDBKey) {
        return this.af.database.object(`/users/${userDBKey}`)
            .update({currentMood: value});
    }

    loginWithFb () {
        this.auth.login({
            provider: AuthProviders.Facebook,
            method: AuthMethods.Popup
        }).then((userAuth) => {
            this.findUserById(userAuth.uid)
                .subscribe((user) => {
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

    isMastered (points) {
        if (points >= 9) {
            return true;
        }
    }

    markMastered (points) {
        console.log({'points': points});
    }

    addPoint (user, habitId) {
        const pointsList = this.af.database.list(`/users/${user.$key}/habits/${habitId}`);
        pointsList.push({date: moment().format('YYYY-MM-DD')});
        return pointsList
            .take(1)
            .do(points => {
                const pointsObj = this.af.database.object(`/users/${user.$key}`);
                pointsObj.update({points: (user.points || 0) + 1});
                if (this.isMastered(points.length)) {
                    pointsObj.update({mastered: (user.mastered || 0) + 1});
                }
            })
    }
}

Users.parameters = [
    [AngularFire]
];
