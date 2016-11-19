import template from './user-public-dashboard.html';

export const userPublicDashboard = ({
    template: template,
    controller: userPublicDashboardCtrl
});

function userPublicDashboardCtrl(users, stateParams) {

    this.user = users.object[stateParams.id];
}

userPublicDashboardCtrl.$inject = ['users', '$stateParams'];