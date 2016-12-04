import template from './user-private-dashboard.html';

export const userPrivateDashboard = ({
    template: template,
    controller: userPrivateDashboardCtrl
});

function userPrivateDashboardCtrl(firebase, $firebaseArray) {

    firebase.auth().onAuthStateChanged(user => {
        this.user = user;

        const ref = firebase.database().ref('habit-requests/');
        const sentRef = ref.orderByChild('sender/uid').equalTo(user.uid);
        const receivedRef = ref.orderByChild('recipient/uid').equalTo(user.uid);

        this.habitsSent = $firebaseArray(sentRef);
        this.habitsReceived = $firebaseArray(receivedRef);


    });


    
}

userPrivateDashboardCtrl.$inject = ['firebase', '$firebaseArray'];