import template from './user-public-dashboard.html';

export const userPublicDashboard = ({
    template: template,
    controller: userPublicDashboardCtrl
});

function userPublicDashboardCtrl(users, stateParams, habitRequests) {

    this.user = users.data[stateParams.id];

    this.addHabit = (value) => {
        console.log(value);

        habitRequests.send({
            name: value,
            type: 'Do more',
            toUser: stateParams.id,
            requestedBy: 'from session'
        });
    }
}

userPublicDashboardCtrl.$inject = ['users', '$stateParams', 'habitRequests'];