import template from './user-private-dashboard.html';

export const userPrivateDashboard = ({
    template: template,
    controller: userPrivateDashboardCtrl
});

function userPrivateDashboardCtrl(firebase, habitRequests) {

    firebase.auth().onAuthStateChanged(user => {
        this.user = user;
        habitRequests.ofUser(user.uid).then(data => {
            this.habitsSent = data[0];
            this.habitsReceived = data[1];
        });
    });


    
}

userPrivateDashboardCtrl.$inject = ['firebase',
    'habitRequests',];