import template from './user-private-dashboard.html';

export const userPrivateDashboard = ({
    template: template,
    controller: userPrivateDashboardCtrl
});

function userPrivateDashboardCtrl(users, session, habitRequests, $firebaseAuth) {

    this.user = users.find(session.userId);

    this.habitRequests = habitRequests.ofUser('from session');

    // console.log($firebaseAuth.bind(null, firebase));
    // const auth = $firebaseAuth();
    // console.log(auth.$getAuth());
}

userPrivateDashboardCtrl.$inject = ['users',
    '$sessionStorage',
    'habitRequests',
    '$firebaseAuth'];