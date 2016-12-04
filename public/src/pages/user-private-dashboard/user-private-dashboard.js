import template from './user-private-dashboard.html';

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
            this.habitsSent = _(snapshot.val())
                .values()
                .value();
        });
        sentRef.once('value', () => {
            scope.$digest();
        });

        receivedRef.on('value', snapshot => {
            const values = _.map(snapshot.val(), (obj, key)=> {
                return {
                    ...obj,
                    uid: key
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
            .ref(`/habit-requests/${challenge.uid}`)
            .update(objToSave);

    };

    this.moodChanged = (value) => {
        this.user.currentMood = value;
        firebase.database()
            .ref(`users/${this.user.dbKey}`)
            .update(this.user);
    }


}

userPrivateDashboardCtrl.$inject = ['firebase', '$scope', 'users'];