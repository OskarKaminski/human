export default class HabitsSvc {

    constructor(firebase, firebaseArray){
        var ref = firebase.database().ref('habits');
        this.data = firebaseArray(ref);
    }

    add(item) {
        this.data.$add(item);
    }

    remove(item) {
        this.data.$remove(item);
    }
}

HabitsSvc.$inject = ['firebase', '$firebaseArray'];