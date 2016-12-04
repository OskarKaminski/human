import template from './user-public-dashboard.html';

export const userPublicDashboard = ({
    template: template,
    controller: userPublicDashboardCtrl
});

function userPublicDashboardCtrl(users, stateParams, habitRequests) {

    this.request = {};

    users.find(stateParams.id).then(user => {
        this.user = user;
    });

    this.setType = (type) => {
        this.request.type = type;
    };

    this.sendChallenge = (description) => {

        this.request.description = description;

        const currentUser = _.pick(
            users.currentUser,
            ['uid', 'photoURL', 'displayName', 'email']
        );

        habitRequests.send({
            ...this.request,
            recipient: this.user,
            sender: currentUser
        });
    }
}

userPublicDashboardCtrl.$inject = ['users', '$stateParams', 'habitRequests'];