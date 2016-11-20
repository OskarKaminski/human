export default class HabitRequestsSvc {

    constructor(firebase, firebaseArray, session){
        var receivedRef = firebase.database().ref(`users/${session.userId}/habit-requests/received`);
        var requestedRef = firebase.database().ref(`users/${session.userId}/habit-requests/requested`);
        this.received = firebaseArray(receivedRef);
        this.requested = firebaseArray(requestedRef);

        this.database = firebase.database();
        this.firebaseArray = firebaseArray;
        this.session = session;
    }

    send(item, toUser) {
        const ref = this.database.ref(`users/${toUser}/habit-requests/received`);
        item.requestedBy = this.session.userId;
        item.toUser = toUser;
        this.requested.$add(item);
        this.firebaseArray(ref).$add(item);
    }

    remove(item) {
        this.data.$remove(item);
    }
}

HabitRequestsSvc.$inject = ['firebase', '$firebaseArray', '$sessionStorage'];