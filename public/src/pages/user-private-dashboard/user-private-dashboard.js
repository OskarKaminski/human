import template from './user-private-dashboard.html';
import thankYouSvc from 'Services/thank-you';

export const userPrivateDashboard = ({
    template: template,
    controller: userPrivateDashboardCtrl
});

function userPrivateDashboardCtrl(firebase, scope, users) {

    firebase.auth().onAuthStateChanged(user => {

        users.find(user.uid).then(user => {
            this.user = user;
        });

        const ref = firebase.database().ref('habit-requests/');
        const sentRef = ref.orderByChild('sender/uid')
            .equalTo(user.uid);
        const receivedRef = ref.orderByChild('recipient/uid')
            .equalTo(user.uid);

        sentRef.on('value', snapshot => {
            const values = _.map(snapshot.val(), (obj, key)=> {
                return {
                    ...obj,
                    dbKey: key
                }
            });
            this.habitsSent = _.filter(values, ['accepted', false]);
            this.habitsAccepted = _.filter(values, ['accepted', true]);
        });
        sentRef.once('value', () => {
            scope.$digest();
        });

        receivedRef.on('value', snapshot => {
            const values = _.map(snapshot.val(), (obj, key)=> {
                return {
                    ...obj,
                    dbKey: key
                }
            });
            this.habitsReceived = _.filter(values, ['accepted', false]);
            this.yourCurrentHabits = _.filter(values, ['accepted', true]);
        });
        receivedRef.once('value', () => {
            scope.$digest();
        });
    });

    this.acceptChallenge = (challenge) => {
        challenge.accepted = true;
        const objToSave = _.omit(challenge, ['uid', '$$hashKey']);
        firebase.database()
            .ref(`/habit-requests/${challenge.dbKey}`)
            .update(objToSave);

    };

    this.moodChanged = (value) => {
        this.user.currentMood = value;
        firebase.database()
            .ref(`users/${this.user.dbKey}`)
            .update(this.user);
    }

    this.thankYou = (habit) => {
        thankYouSvc.send(habit);
    }


}

userPrivateDashboardCtrl.$inject = ['firebase', '$scope', 'users'];