import _ from 'lodash';

export default class UsersSvc {

    constructor(firebase, firebaseObject) {
        this.firebase = firebase;
        this.usersRef = firebase.database().ref('users');
        this.data = firebaseObject(this.usersRef);

        this.firebaseObject = firebaseObject;
        this.database = firebase.database();
    }

    get currentUser() {
        return this.firebase.auth().currentUser;
    }

    getOrCreate(userAuthData) {
        this.find(userAuthData.uid).then(val => {
            if (!val) {
                this.create(userAuthData);
            }
        });
    }

    create(userAuthData) {
        console.log(userAuthData);
        const newUser = _.pick(
            userAuthData,
            ['uid', 'photoURL', 'displayName', 'email']
        );

        var newUserRef = this.usersRef.push();
        newUserRef.set(newUser);
    }

    find(userId) {
        return this.usersRef
            .orderByChild('uid')
            .equalTo(userId)
            .once('value')
            .then(snapshot => {
                const val = snapshot.val();
                return _.values(val)[0];
            });
    }
}

UsersSvc.$inject = ['firebase', '$firebaseObject'];