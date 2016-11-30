export default class HabitRequestsSvc {

    constructor(firebase, firebaseArray) {
        this.ref = firebase.database().ref('habit-requests/');

        this.firebaseArray = firebaseArray;
    }

    ofUser(user) {
        const userRequestedRef = this.ref.child(user).child('requested');
        const userReceivedRef = this.ref.child(user).child('received');
        return {
            requested: this.firebaseArray(userRequestedRef),
            received: this.firebaseArray(userReceivedRef)
        };
    }

    send(item) {
        const receiverRef = this.ref.child(item.toUser).child('received');
        const senderRef = this.ref.child(item.requestedBy).child('/requested');
        this.firebaseArray(receiverRef).$add(item);
        this.firebaseArray(senderRef).$add(item);
    }

    remove(item) {
        this.data.$remove(item);
    }
}

HabitRequestsSvc.$inject = ['firebase', '$firebaseArray'];