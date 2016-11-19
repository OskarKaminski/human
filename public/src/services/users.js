export default class UsersSvc {


    constructor(firebase, firebaseArray, firebaseObject){
        this.ref = firebase.database().ref('users');

        this.data = firebaseArray(this.ref);
        this.object = firebaseObject(this.ref);
    }

    add(item) {
        this.data.$add(item);
    }

    remove(item) {
        this.data.$remove(item);
    }
}

UsersSvc.$inject = ['firebase', '$firebaseArray', '$firebaseObject'];