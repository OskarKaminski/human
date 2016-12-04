export default class HabitRequestsSvc {

    constructor(firebase) {
        this.ref = firebase.database().ref('habit-requests/');
    }

    send(item) {
        item.accepted = false;
        const newRequestRef = this.ref.push();
        newRequestRef.set(item);
    }

    remove(item) {
        this.data.$remove(item);
    }
}

HabitRequestsSvc.$inject = ['firebase'];