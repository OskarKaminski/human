import template from './user-private-dashboard.html';

export const userPrivateDashboard = ({
    template: template,
    controller: userPrivateDashboardCtrl
});

function userPrivateDashboardCtrl(users, session, habitRequests) {

    this.user = users.find(session.userId);

    this.habitRequests = habitRequests;
}

userPrivateDashboardCtrl.$inject = ['users', '$sessionStorage', 'habitRequests'];