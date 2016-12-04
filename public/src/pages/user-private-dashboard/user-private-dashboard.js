import template from './user-private-dashboard.html';

export const userPrivateDashboard = ({
    template: template,
    controller: userPrivateDashboardCtrl
});

function userPrivateDashboardCtrl(firebase, scope) {

    firebase.auth().onAuthStateChanged(user => {
        this.user = user;

        const ref = firebase.database().ref('habit-requests/');

        ref.orderByChild('sender/uid')
            .equalTo(user.uid)
            .on('value', snapshot => {
                this.habitsSent = _(snapshot.val())
                    .values()
                    .value();
                scope.$digest();
            });

        ref.orderByChild('recipient/uid')
            .equalTo(user.uid)
            .on('value', snapshot => {
                this.habitsReceived = _(snapshot.val())
                    .values()
                    .filter(['accepted', false])
                    .value();

                this.yourCurrentHabits = _(snapshot.val())
                    .values()
                    .filter(['accepted', true])
                    .value();
                scope.$digest();
            });
    });


}

userPrivateDashboardCtrl.$inject = ['firebase', '$scope'];