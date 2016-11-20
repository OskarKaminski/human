import template from './user-public-dashboard.html';

export const userPublicDashboard = ({
    template: template,
    controller: userPublicDashboardCtrl
});

function userPublicDashboardCtrl(users, stateParams, habitRequests) {

    this.user = users.object[stateParams.id];

    this.addHabit = (value) => {
        console.log(value);

        habitRequests.send({
            name: value,
            type: 'Do more'
        }, stateParams.id);
    }
}

userPublicDashboardCtrl.$inject = ['users', '$stateParams', 'habitRequests'];