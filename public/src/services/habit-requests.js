export default class HabitRequestsSvc {

    constructor(firebase, q) {
        this.ref = firebase.database().ref('habit-requests/');
        this.q = q;
    }

    ofUser(userId) {
        const sent = this.ref
            .orderByChild('sender/uid')
            .equalTo(userId)
            .once('value')
            .then(snapshot => {
                const val = snapshot.val();
                return _.values(val);
            });

        const received = this.ref
            .orderByChild('recipient/uid')
            .equalTo(userId)
            .once('value')
            .then(snapshot => {
                const val = snapshot.val();
                return _.values(val);
            });

        return this.q.all([sent, received]);
    }

    send(item) {
        const newRequestRef = this.ref.push();
        newRequestRef.set(item);
    }

    remove(item) {
        this.data.$remove(item);
    }
}

HabitRequestsSvc.$inject = ['firebase', '$q'];