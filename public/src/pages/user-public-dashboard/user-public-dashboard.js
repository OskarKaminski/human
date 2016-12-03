import template from './user-public-dashboard.html';

export const userPublicDashboard = ({
    template: template,
    controller: userPublicDashboardCtrl
});

function userPublicDashboardCtrl(users, stateParams, habitRequests) {

    users.find(stateParams.id).then(user => {
        this.user = user;
    });

    this.addHabit = (value) => {
        console.log(value);

        const currentUser = _.pick(
            users.currentUser,
            ['uid', 'photoURL', 'displayName', 'email']
        );

        habitRequests.send({
            name: value,
            type: 'Do more',
            recipient: this.user,
            sender: currentUser
        });
    }
}

userPublicDashboardCtrl.$inject = ['users', '$stateParams', 'habitRequests'];