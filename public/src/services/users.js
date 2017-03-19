import _ from 'lodash/lodash.min';
import moment from 'moment';
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2'
import {Subject} from 'rxjs';

export class Users {

    constructor (af) {
        this.af = af;
        this.auth = af.auth;

        this.currentUser = this.getCurrentUser();

        this.newAwardO = new Subject();
        this.habitMastered = new Subject();

        this.newAwardO
            .switchMap(({userId, habitId}) => {
                return this.findUserById(userId)
                    .take(1)
                    .map(user => ({
                        habit: this.af.database.object(`/feedback/${habitId}`),
                        habitPoints: this.af.database.list(`/users/${user.$key}/habits/incomplete/${habitId}`),
                        habitIncompleted: this.af.database.object(`/users/${user.$key}/habits/incomplete/${habitId}`),
                        habitCompleted: this.af.database.object(`/users/${user.$key}/habits/complete/${habitId}`)
                    }))
            })
            .do((habits) => {
                habits.habitPoints.push({date: moment().format('YYYY-MM-DD')})
                    .then(_ => {
                        this.habitMastered.next(habits)
                    });
            })
            .subscribe();

        this.habitMastered
            .flatMap(habits => {
                return habits.habit
                    .map(feedback => ({
                        ...habits,
                        feedback
                    }))
            })
            .do(({habitIncompleted, habitCompleted, feedback}) => {
                habitCompleted.set({
                    description: `${feedback.type} ${feedback.description}`,
                    date: moment().format('YYYY-MM-DD')
                });
                habitIncompleted.remove();
            })
            .subscribe();
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
}

Users.parameters = [
    [AngularFire]
];
