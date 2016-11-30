export default class UsersSvc {


    constructor(firebase, firebaseObject){
        const usersRef = firebase.database().ref('users');
        this.data = firebaseObject(usersRef);

        this.firebaseObject = firebaseObject;
        this.database = firebase.database();
    }

    find(userId){
        const userRef = this.database.ref(`users/${userId}`);
        return this.firebaseObject(userRef);
    }
}

UsersSvc.$inject = ['firebase', '$firebaseObject'];